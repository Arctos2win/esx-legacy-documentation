import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://docs.esx-framework.org';

// Cache the sitemap for better performance
let cachedSitemap = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

// Get all MDX files from the pages directory
function getAllMdxFiles(dir, baseDir = dir) {
  const files = fs.readdirSync(dir);
  let mdxFiles = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('_') && file !== 'api') {
      // Recursively get files from subdirectories
      mdxFiles = mdxFiles.concat(getAllMdxFiles(filePath, baseDir));
    } else if (file.endsWith('.mdx') && !file.startsWith('_')) {
      // Calculate relative path from base directory
      const relativePath = path.relative(baseDir, filePath);
      mdxFiles.push(relativePath);
    }
  }

  return mdxFiles;
}

// Convert file path to URL path
function filePathToUrl(filePath) {
  // Remove .mdx extension
  let urlPath = filePath.replace(/\.mdx$/, '');
  
  // Replace backslashes with forward slashes (Windows compatibility)
  urlPath = urlPath.replace(/\\/g, '/');
  
  // Handle index files
  if (urlPath.endsWith('/index')) {
    urlPath = urlPath.replace('/index', '');
  }
  
  // Ensure it starts with /
  if (!urlPath.startsWith('/')) {
    urlPath = '/' + urlPath;
  }
  
  return urlPath;
}

// Get priority based on URL depth and importance
function getPriority(url) {
  // Root pages get highest priority
  if (url === '/en' || url === '/en/') {
    return '1.0';
  }
  
  // Main category pages
  if (url.match(/^\/en\/[^\/]+$/)) {
    return '0.8';
  }
  
  // Subcategory pages
  if (url.match(/^\/en\/[^\/]+\/[^\/]+$/)) {
    return '0.6';
  }
  
  // Deeper pages
  return '0.4';
}

// Get change frequency based on URL type
function getChangeFreq(url) {
  // Main index and category pages change more frequently
  if (url === '/en' || url.match(/^\/en\/[^\/]+$/)) {
    return 'weekly';
  }
  
  // Documentation pages change less frequently
  return 'monthly';
}

// Get last modified date from file stats
function getLastModified(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
  } catch (error) {
    // Fallback to current date if file doesn't exist
    return new Date().toISOString();
  }
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Check cache first
    const now = Date.now();
    if (cachedSitemap && (now - cacheTimestamp) < CACHE_DURATION) {
      res.setHeader('Content-Type', 'application/xml');
      res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
      res.setHeader('X-Cache', 'HIT');
      return res.status(200).send(cachedSitemap);
    }

    const pagesDir = path.join(process.cwd(), 'src', 'pages');
    
    // Check if pages directory exists
    if (!fs.existsSync(pagesDir)) {
      throw new Error('Pages directory not found');
    }
    
    const mdxFiles = getAllMdxFiles(pagesDir);

    // Generate sitemap URLs
    const urls = mdxFiles.map(filePath => {
      const fullFilePath = path.join(pagesDir, filePath);
      const url = filePathToUrl(filePath);
      const lastmod = getLastModified(fullFilePath);
      const priority = getPriority(url);
      const changefreq = getChangeFreq(url);

      return {
        loc: `${DOMAIN}${url}`,
        lastmod,
        changefreq,
        priority
      };
    });

    // Add root URL redirect (/ -> /en)
    urls.unshift({
      loc: DOMAIN,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '1.0'
    });

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Cache the generated sitemap
    cachedSitemap = sitemap;
    cacheTimestamp = now;

    // Set appropriate headers
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('X-Cache', 'MISS');
    
    return res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return res.status(500).json({ message: 'Error generating sitemap' });
  }
}