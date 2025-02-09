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

generateSitemap().catch(console.error) 