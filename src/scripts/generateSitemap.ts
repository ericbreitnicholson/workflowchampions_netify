import fs from 'fs'
import path from 'path'
import { stateData } from '../data/generatedLocations'

const BASE_URL = 'https://workflowchampions.com'
const CURRENT_DATE = new Date().toISOString().split('T')[0]

// Main pages with their priorities
const mainPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/locations', priority: '0.9', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/terms', priority: '0.5', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { url: '/sitemap', priority: '0.5', changefreq: 'monthly' },
]

function generateSitemapXML(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  // Add main pages
  mainPages.forEach(page => {
    xml += `  <url>\n`
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`
    xml += `    <priority>${page.priority}</priority>\n`
    xml += `  </url>\n`
  })

  // Add location pages
  Object.entries(stateData).forEach(([stateSlug, state]) => {
    // State page
    xml += `  <url>\n`
    xml += `    <loc>${BASE_URL}/locations/${stateSlug}</loc>\n`
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`
    xml += `    <changefreq>weekly</changefreq>\n`
    xml += `    <priority>0.8</priority>\n`
    xml += `  </url>\n`

    // County pages
    state.counties.forEach(county => {
      xml += `  <url>\n`
      xml += `    <loc>${BASE_URL}/locations/${stateSlug}/${county.slug}</loc>\n`
      xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`
      xml += `    <changefreq>weekly</changefreq>\n`
      xml += `    <priority>0.7</priority>\n`
      xml += `  </url>\n`

      // City pages
      county.cities.forEach(city => {
        xml += `  <url>\n`
        xml += `    <loc>${BASE_URL}/locations/${stateSlug}/${county.slug}/${city.slug}</loc>\n`
        xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`
        xml += `    <changefreq>weekly</changefreq>\n`
        xml += `    <priority>0.6</priority>\n`
        xml += `  </url>\n`
      })
    })
  })

  xml += '</urlset>'
  return xml
}

// Generate and write sitemap
const sitemap = generateSitemapXML()
const outputPath = path.join(process.cwd(), 'public/sitemap.xml')
fs.writeFileSync(outputPath, sitemap)
console.log('Sitemap generated successfully!') 