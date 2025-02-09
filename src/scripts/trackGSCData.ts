import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

interface GSCMetrics {
  date: string
  clicks: number
  impressions: number
  ctr: string
  position: number
}

interface GSCData {
  pages: {
    url: string
    clicks: number
    impressions: number
    ctr: string
    position: number
  }[]
  devices: {
    device: string
    clicks: number
    impressions: number
    ctr: string
    position: number
  }[]
  countries: {
    country: string
    clicks: number
    impressions: number
    ctr: string
    position: number
  }[]
  queries: {
    query: string
    clicks: number
    impressions: number
    ctr: string
    position: number
  }[]
}

async function parseCSV(filePath: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const results: any[] = []
    fs.createReadStream(filePath)
      .pipe(csv({
        mapHeaders: ({ header }) => {
          switch (header) {
            case 'Top pages': return 'url'
            case 'Top queries': return 'query'
            case 'Country': return 'country'
            case 'Device': return 'device'
            default: return header.toLowerCase()
          }
        }
      }))
      .on('data', (data) => {
        // Convert numeric strings to numbers
        data.clicks = Number(data.clicks)
        data.impressions = Number(data.impressions)
        data.position = Number(data.position)
        results.push(data)
      })
      .on('end', () => resolve(results))
      .on('error', reject)
  })
}

async function trackGSCData(gscDataDir: string) {
  const dataDir = path.join(process.cwd(), 'src/data/gsc_history')
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  // Parse current GSC data
  const currentData: GSCData = {
    pages: await parseCSV(path.join(gscDataDir, 'Pages.csv')),
    devices: await parseCSV(path.join(gscDataDir, 'Devices.csv')),
    countries: await parseCSV(path.join(gscDataDir, 'Countries.csv')),
    queries: await parseCSV(path.join(gscDataDir, 'Queries.csv'))
  }

  // Get date from directory name
  const date = path.basename(gscDataDir).replace('GSC_', '')
  
  // Save data with date
  const fileName = `gsc_data_${date}.json`
  fs.writeFileSync(
    path.join(dataDir, fileName),
    JSON.stringify(currentData, null, 2)
  )

  // Generate analysis report
  const report = {
    date,
    summary: {
      totalClicks: currentData.pages.reduce((sum, page) => sum + page.clicks, 0),
      totalImpressions: currentData.pages.reduce((sum, page) => sum + page.impressions, 0),
      avgPosition: currentData.pages.reduce((sum, page) => sum + page.position, 0) / currentData.pages.length,
      topPages: currentData.pages
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 5),
      deviceBreakdown: currentData.devices,
      topQueries: currentData.queries
        .sort((a, b) => b.impressions - a.impressions)
        .slice(0, 5),
      topCountries: currentData.countries
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 5)
    },
    recommendations: generateRecommendations(currentData)
  }

  // Save analysis report
  const reportFileName = `analysis_${date}.json`
  fs.writeFileSync(
    path.join(dataDir, reportFileName),
    JSON.stringify(report, null, 2)
  )

  console.log(`GSC data and analysis saved for ${date}`)
  console.log('\nSummary:')
  console.log('- Total Clicks:', report.summary.totalClicks)
  console.log('- Total Impressions:', report.summary.totalImpressions)
  console.log('- Average Position:', report.summary.avgPosition.toFixed(2))
  
  console.log('\nTop Pages:')
  report.summary.topPages.forEach(page => {
    console.log(`- ${page.url}: ${page.clicks} clicks (${page.ctr} CTR)`)
  })
  
  console.log('\nDevice Breakdown:')
  report.summary.deviceBreakdown.forEach(device => {
    console.log(`- ${device.device}: ${device.impressions} impressions (${device.ctr} CTR)`)
  })
  
  console.log('\nTop Queries:')
  report.summary.topQueries.forEach(query => {
    console.log(`- "${query.query}": ${query.impressions} impressions (avg position: ${query.position.toFixed(1)})`)
  })
  
  console.log('\nTop Countries:')
  report.summary.topCountries.forEach(country => {
    console.log(`- ${country.country}: ${country.clicks} clicks (${country.ctr} CTR)`)
  })
  
  console.log('\nRecommendations:')
  report.recommendations.forEach(rec => {
    console.log(`- ${rec}`)
  })
}

function generateRecommendations(data: GSCData): string[] {
  const recommendations: string[] = []

  // Analyze mobile performance
  const mobileData = data.devices.find(d => d.device === 'Mobile')
  if (mobileData && mobileData.impressions < 10) {
    recommendations.push('Critical: Mobile visibility is very low. Prioritize mobile optimization.')
  }

  // Analyze CTR
  const lowCTRPages = data.pages.filter(p => 
    p.impressions > 10 && 
    parseFloat(p.ctr.replace('%', '')) < 2
  )
  if (lowCTRPages.length > 0) {
    recommendations.push(`Improve meta titles and descriptions for: ${lowCTRPages.map(p => p.url).join(', ')}`)
  }

  // Analyze position
  const lowRankingPages = data.pages.filter(p => p.position > 20)
  if (lowRankingPages.length > 0) {
    const avgPosition = lowRankingPages.reduce((sum, p) => sum + p.position, 0) / lowRankingPages.length
    recommendations.push(`Focus on improving content and backlinks for low-ranking pages (average position: ${avgPosition.toFixed(1)})`)
  }

  // Analyze geographic performance
  const usData = data.countries.find(c => c.country === 'United States')
  if (usData && usData.clicks < 10) {
    recommendations.push(`Enhance local SEO efforts for US market (current CTR: ${usData.ctr})`)
  }

  // Analyze query opportunities
  const highPositionQueries = data.queries
    .filter(q => q.position <= 20)
    .sort((a, b) => a.position - b.position)
  if (highPositionQueries.length > 0) {
    recommendations.push(`Optimize for these well-ranking queries: ${highPositionQueries.map(q => q.query).join(', ')}`)
  }

  return recommendations
}

// Execute if run directly
if (require.main === module) {
  const gscDataDir = process.argv[2] || path.join(process.cwd(), 'GSC_02092025')
  trackGSCData(gscDataDir)
    .catch(console.error)
} 