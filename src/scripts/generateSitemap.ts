import fs from 'fs'
import { stateData } from '../data/generatedLocations'

const BASE_URL = 'https://workflowchampions.com'

// Define the structure of our location data
type City = {
  name: string
  slug: string
  image?: string
}

type County = {
  name: string
  slug: string
  image?: string
  cities: City[]
}

type State = {
  name: string
  image?: string
  counties: County[]
}

// Static blog data for now
const blogPosts = [
  {
    slug: 'real-estate-seo-guide-2024',
    title: 'Complete Real Estate SEO Guide for 2024',
    modified: '2024-02-15',
    featuredImage: {
      node: {
        sourceUrl: 'https://workflowchampions.com/images/blog/real-estate-seo-guide.jpg',
        altText: 'Real Estate SEO Guide'
      }
    }
  },
  {
    slug: 'local-seo-strategies',
    title: 'Local SEO Strategies for Real Estate Agents',
    modified: '2024-02-10',
    featuredImage: {
      node: {
        sourceUrl: 'https://workflowchampions.com/images/blog/local-seo-strategies.jpg',
        altText: 'Local SEO Strategies'
      }
    }
  }
]

async function generateSitemap() {
  // Start XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                           http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`

  // Add homepage
  sitemap += `  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`

  // Add blog index page
  sitemap += `  <url>
    <loc>${BASE_URL}/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>\n`

  // Add blog posts
  for (const post of blogPosts) {
    sitemap += `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.modified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>${post.featuredImage?.node ? `
    <image:image>
      <image:loc>${escapeUrl(post.featuredImage.node.sourceUrl)}</image:loc>
      <image:title>${escapeXml(post.title)}</image:title>
      <image:caption>${escapeXml(post.title)}</image:caption>
    </image:image>` : ''}
  </url>\n`
  }

  // Add main locations page
  sitemap += `  <url>
    <loc>${BASE_URL}/locations</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>\n`

  // Add state pages
  for (const [stateSlug, state] of Object.entries(stateData)) {
    sitemap += `  <url>
    <loc>${BASE_URL}/locations/${stateSlug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>${state.image ? `
    <image:image>
      <image:loc>${escapeUrl(state.image)}</image:loc>
      <image:title>${escapeXml(state.name)} Real Estate Market</image:title>
      <image:caption>Real Estate SEO Services in ${escapeXml(state.name)}</image:caption>
    </image:image>` : ''}
  </url>\n`

    // Add county pages
    for (const county of state.counties) {
      sitemap += `  <url>
    <loc>${BASE_URL}/locations/${stateSlug}/${county.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>${county.image ? `
    <image:image>
      <image:loc>${escapeUrl(county.image)}</image:loc>
      <image:title>${escapeXml(county.name)}, ${escapeXml(state.name)} Real Estate Market</image:title>
      <image:caption>Real Estate SEO Services in ${escapeXml(county.name)}, ${escapeXml(state.name)}</image:caption>
    </image:image>` : ''}
  </url>\n`

      // Add city pages
      for (const city of county.cities) {
        sitemap += `  <url>
    <loc>${BASE_URL}/locations/${stateSlug}/${county.slug}/${city.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>${city.image ? `
    <image:image>
      <image:loc>${escapeUrl(city.image)}</image:loc>
      <image:title>${escapeXml(city.name)}, ${escapeXml(county.name)}, ${escapeXml(state.name)} Real Estate Market</image:title>
      <image:caption>Expert Real Estate SEO Services in ${escapeXml(city.name)}, ${escapeXml(county.name)}, ${escapeXml(state.name)}</image:caption>
    </image:image>` : ''}
  </url>\n`
      }
    }
  }

  // Close XML
  sitemap += '</urlset>\n'

  // Write sitemap
  fs.writeFileSync('public/sitemap.xml', sitemap)
  console.log('Sitemap generated successfully!')

  // Generate enhanced robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Optimize crawl rate
Crawl-delay: 1

# Sitemaps
Sitemap: ${BASE_URL}/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /wp-login.php

# Allow search engines to crawl JavaScript and CSS
Allow: /*.js$
Allow: /*.css$

# Block certain file types
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Host directive
Host: workflowchampions.com`

  fs.writeFileSync('public/robots.txt', robotsTxt)
  console.log('robots.txt generated successfully!')
}

async function generateHtmlSitemap() {
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - Workflow Champions</title>
    <meta name="robots" content="noindex, follow">
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            color: #333;
        }
        h1, h2 {
            color: #1a1a1a;
            border-bottom: 2px solid #eee;
            padding-bottom: 0.5rem;
        }
        a {
            color: #2563eb;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
        }
        .section {
            margin-bottom: 3rem;
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        li {
            margin-bottom: 0.5rem;
        }
    </style>
</head>
<body>
    <h1>Sitemap</h1>
    
    <div class="section">
        <h2>Main Pages</h2>
        <ul>
            <li><a href="${BASE_URL}">Home</a></li>
            <li><a href="${BASE_URL}/locations">Locations</a></li>
            <li><a href="${BASE_URL}/blog">Blog</a></li>
        </ul>
    </div>

    <div class="section">
        <h2>Blog Posts</h2>
        <ul class="grid">
            ${blogPosts.map(post => `
            <li>
                <a href="${BASE_URL}/blog/${post.slug}">${escapeHtml(post.title)}</a>
            </li>`).join('')}
        </ul>
    </div>

    <div class="section">
        <h2>Locations</h2>
        <div class="grid">
            ${Object.entries(stateData).map(([stateSlug, state]) => `
            <div>
                <h3><a href="${BASE_URL}/locations/${stateSlug}">${escapeHtml(state.name)}</a></h3>
                <ul>
                    ${state.counties.slice(0, 5).map(county => `
                    <li>
                        <a href="${BASE_URL}/locations/${stateSlug}/${county.slug}">${escapeHtml(county.name)}</a>
                        <ul>
                            ${county.cities.slice(0, 3).map(city => `
                            <li>
                                <a href="${BASE_URL}/locations/${stateSlug}/${county.slug}/${city.slug}">${escapeHtml(city.name)}</a>
                            </li>`).join('')}
                        </ul>
                    </li>`).join('')}
                </ul>
            </div>`).join('')}
        </div>
    </div>
</body>
</html>`

  fs.writeFileSync('public/sitemap.html', html)
  console.log('HTML Sitemap generated successfully!')
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case "'": return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}

// Helper function to escape URLs in XML
function escapeUrl(url: string): string {
  return url.replace(/&/g, '&amp;')
}

// Helper function to escape HTML special characters
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// Update the main function to generate both sitemaps
async function main() {
  try {
    await generateSitemap()
    await generateHtmlSitemap()
  } catch (error) {
    console.error('Error generating sitemaps:', error)
  }
}

main().catch(console.error) 