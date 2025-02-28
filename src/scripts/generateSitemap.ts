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

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: string
  priority: string
  image?: {
    loc: string
    title: string
    caption: string
  }
}

async function generateSitemap() {
  const urls: SitemapUrl[] = []

  // Add homepage
  urls.push({
    loc: BASE_URL,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  })

  // Add blog index page
  urls.push({
    loc: `${BASE_URL}/blog`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.9'
  })

  // Add blog posts
  for (const post of blogPosts) {
    urls.push({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: post.modified,
      changefreq: 'weekly',
      priority: '0.8',
      ...(post.featuredImage?.node && {
        image: {
          loc: post.featuredImage.node.sourceUrl,
          title: post.title,
          caption: post.title
        }
      })
    })
  }

  // Add main locations page
  urls.push({
    loc: `${BASE_URL}/locations`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.9'
  })

  // Add state pages
  for (const [stateSlug, state] of Object.entries(stateData)) {
    urls.push({
      loc: `${BASE_URL}/locations/${stateSlug}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
      ...(state.image && {
        image: {
          loc: state.image,
          title: `${state.name} Real Estate Market`,
          caption: `Real Estate SEO Services in ${state.name}`
        }
      })
    })

    // Add county pages
    for (const county of state.counties) {
      urls.push({
        loc: `${BASE_URL}/locations/${stateSlug}/${county.slug}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: '0.7',
        ...(county.image && {
          image: {
            loc: county.image,
            title: `${county.name}, ${state.name} Real Estate Market`,
            caption: `Real Estate SEO Services in ${county.name}, ${state.name}`
          }
        })
      })

      // Add city pages
      for (const city of county.cities) {
        urls.push({
          loc: `${BASE_URL}/locations/${stateSlug}/${county.slug}/${city.slug}`,
          lastmod: new Date().toISOString().split('T')[0],
          changefreq: 'weekly',
          priority: '0.6',
          ...(city.image && {
            image: {
              loc: city.image,
              title: `${city.name}, ${county.name}, ${state.name} Real Estate Market`,
              caption: `Expert Real Estate SEO Services in ${city.name}, ${county.name}, ${state.name}`
            }
          })
        })
      }
    }
  }

  // Split URLs into chunks of 100
  const URLS_PER_FILE = 100
  const chunks = []
  for (let i = 0; i < urls.length; i += URLS_PER_FILE) {
    chunks.push(urls.slice(i, i + URLS_PER_FILE))
  }

  // Generate sitemap files
  chunks.forEach((chunk, index) => {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                           http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`

    for (const url of chunk) {
      sitemap += `  <url>
    <loc>${escapeUrl(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.image ? `
    <image:image>
      <image:loc>${escapeUrl(url.image.loc)}</image:loc>
      <image:title>${escapeXml(url.image.title)}</image:title>
      <image:caption>${escapeXml(url.image.caption)}</image:caption>
    </image:image>` : ''}
  </url>\n`
    }

    sitemap += '</urlset>\n'
    fs.writeFileSync(`public/sitemap-${index + 1}.xml`, sitemap)
  })

  // Generate sitemap index
  let sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  for (let i = 0; i < chunks.length; i++) {
    sitemapIndex += `  <sitemap>
    <loc>${BASE_URL}/sitemap-${i + 1}.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>\n`
  }

  sitemapIndex += '</sitemapindex>\n'
  fs.writeFileSync('public/sitemap.xml', sitemapIndex)

  // Update robots.txt to point to sitemap index
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
  console.log('Sitemaps and robots.txt generated successfully!')
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