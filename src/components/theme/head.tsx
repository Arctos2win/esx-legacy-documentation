import { useConfig } from "nextra-theme-docs";
import { useTranslation } from "src/hooks/useTranslation";
import { useRouter } from 'next/router';

export function Head() {
    const { asPath } = useRouter();
    const t = useTranslation();
    const { frontMatter, title } = useConfig();

    const canonicalUrl = `https://docs.esx-framework.org${asPath}`;
    const baseDescription = "Complete documentation for ESX Framework - The most popular FiveM roleplay framework. Learn installation, scripting, resources, and advanced features.";
    
    // Dynamic description based on page
    const getPageDescription = () => {
        if (frontMatter?.description) return frontMatter.description;
        if (asPath === "/") return baseDescription;
        if (asPath.includes("esx_core")) return "ESX Core documentation - Essential functions, exports, and API reference for ESX Framework development.";
        if (asPath.includes("esx_addons")) return "ESX Addons documentation - Complete guide to ESX Framework addons, resources, and extensions.";
        if (asPath.includes("installation")) return "ESX Framework installation guide - Step-by-step setup instructions for FiveM roleplay servers.";
        return `${title} - ${baseDescription}`;
    };

    const description = getPageDescription();
    const pageTitle = asPath === "/" ? "ESX Framework Documentation - Complete FiveM Roleplay Guide" : `${title} | ESX Framework Docs`;
    
    // Structured keywords
    const keywords = [
        "ESX Framework",
        "FiveM",
        "GTA V Roleplay",
        "Lua scripting",
        "FiveM server",
        "ESX resources",
        "CitizenFX",
        "FiveM development",
        "Roleplay framework",
        "ESX addons",
        ...(t.keywords ? t.keywords.split(',').map(k => k.trim()) : [])
    ].join(', ');

    return (
        <>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="ESX Framework Team" />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Viewport and Mobile */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="format-detection" content="telephone=no" />
            
            {/* Language and Locale */}
            <meta httpEquiv="Content-Language" content="en" />
            <meta name="language" content="English" />
            
            {/* Favicon and Icons - Optimized */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="theme-color" content="#ff6b35" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="ESX Framework Documentation" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content="https://docs.esx-framework.org/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:locale" content="en_US" />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ESXFramework" />
            <meta name="twitter:creator" content="@ESXFramework" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://docs.esx-framework.org/twitter-card.png" />
            
            {/* Additional SEO Meta Tags */}
            <meta name="classification" content="Documentation" />
            <meta name="category" content="Gaming, Development, FiveM" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta name="revisit-after" content="1 days" />
            
            {/* Structured Data JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        "headline": pageTitle,
                        "description": description,
                        "url": canonicalUrl,
                        "datePublished": "2024-01-01",
                        "dateModified": new Date().toISOString(),
                        "author": {
                            "@type": "Organization",
                            "name": "ESX Framework Team",
                            "url": "https://esx-framework.org"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "ESX Framework",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://docs.esx-framework.org/logo.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": canonicalUrl
                        },
                        "articleSection": "Documentation",
                        "keywords": keywords,
                        "inLanguage": "en-US"
                    })
                }}
            />
            
            {/* Preconnect for performance */}
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            
            {/* Google Analytics - Optimized Loading */}
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                <>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                                    page_title: document.title,
                                    page_location: window.location.href,
                                    send_page_view: false
                                });
                                
                                // Optimized tracking functions
                                window.trackAdClick = function(adLocation, adType) {
                                    if (typeof gtag !== 'undefined') {
                                        gtag('event', 'ad_click', {
                                            event_category: 'advertising',
                                            event_label: adLocation,
                                            ad_type: adType,
                                            value: 1
                                        });
                                    }
                                };
                                
                                window.trackAdImpression = function(adLocation, adType) {
                                    if (typeof gtag !== 'undefined') {
                                        gtag('event', 'ad_impression', {
                                            event_category: 'advertising',
                                            event_label: adLocation,
                                            ad_type: adType,
                                            value: 1
                                        });
                                    }
                                };
                                
                                // Send page view after load
                                window.addEventListener('load', function() {
                                    gtag('event', 'page_view', {
                                        page_title: document.title,
                                        page_location: window.location.href
                                    });
                                });
                            `
                        }}
                    />
                </>
            )}
        </>
    );
}