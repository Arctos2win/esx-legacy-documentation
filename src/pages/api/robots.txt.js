export default function handler(req, res) {
  const robots = `User-agent: *
Allow: /

# Block admin and API routes
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important files
Allow: /api/sitemap.xml
Allow: /api/robots.txt

# Sitemap location
Sitemap: https://docs.esx-framework.org/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.status(200).send(robots);
}