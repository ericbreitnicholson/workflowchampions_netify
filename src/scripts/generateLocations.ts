import fs from 'fs'
import path from 'path'
import { StateData } from '../app/locations/[state]/page'
import { stateImages } from '../data/locations'

// Helper function to convert string to slug
function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Helper function to get state description
function getStateDescription(stateName: string): string {
  return `Helping real estate agents dominate search results across ${stateName}, connecting buyers and sellers in this dynamic market.`
}

// Helper function to get county description
function getCountyDescription(countyName: string, stateName: string): string {
  return `Supporting real estate professionals throughout ${countyName}, showcasing the unique opportunities in this thriving region of ${stateName}.`
}

// Helper function to get city description
function getCityDescription(cityName: string): string {
  return `Expert real estate SEO services in ${cityName}, helping agents connect with qualified buyers and sellers in this growing market.`
}

// Helper function to get major cities for a county
function getMajorCities(countyName: string, stateName: string): string[] {
  // This could be expanded with a more comprehensive database
  return ['Downtown', 'North', 'South', 'East', 'West'].map(area => 
    `${countyName.replace(' County', '')} ${area}`
  )
}

// Main function to generate location data
async function generateLocationData(): Promise<void> {
  // Read the CSV file
  const csvPath = path.join(process.cwd(), 'State-County.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  
  // Parse CSV content
  const lines = csvContent.split('\n').slice(1) // Skip header
  const stateCountyPairs = lines
    .filter(line => line.trim())
    .map(line => {
      const [state, county] = line.split(',').map(str => str.trim())
      return { state, county }
    })

  // Generate state data structure
  const stateData: StateData = {}

  stateCountyPairs.forEach(({ state, county }) => {
    const stateSlug = toSlug(state)
    const countySlug = toSlug(county)
    
    // Initialize state if it doesn't exist
    if (!stateData[stateSlug]) {
      stateData[stateSlug] = {
        name: state.replace(/-/g, ' '),
        description: getStateDescription(state.replace(/-/g, ' ')),
        image: stateImages[stateSlug] || 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        counties: []
      }
    }

    // Add county if it doesn't exist
    const existingCounty = stateData[stateSlug].counties.find(c => c.slug === countySlug)
    if (!existingCounty) {
      const countyName = county.replace(/-/g, ' ')
      const cities = getMajorCities(countyName, state.replace(/-/g, ' '))
      
      stateData[stateSlug].counties.push({
        name: countyName,
        slug: countySlug,
        description: getCountyDescription(countyName, state.replace(/-/g, ' ')),
        image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
        cities: cities.map(cityName => ({
          name: cityName,
          slug: toSlug(cityName),
          description: getCityDescription(cityName),
          marketStats: [
            {
              label: "Average Home Price",
              value: "$450,000",
              description: `Median home value in ${cityName}`
            },
            {
              label: "Market Growth",
              value: "8%",
              description: "Annual market appreciation"
            },
            {
              label: "Days on Market",
              value: "30",
              description: "Average days to sell a property"
            }
          ],
          neighborhoods: [
            {
              name: "Downtown",
              description: `${cityName}'s vibrant city center`,
              features: ["Urban Living", "Entertainment", "Dining"]
            },
            {
              name: "Historic District",
              description: "Charming historic architecture",
              features: ["Historic Homes", "Tree-lined Streets", "Community"]
            }
          ],
          seoStrategies: [
            {
              title: "Local Search Optimization",
              description: `Target high-intent buyers in ${cityName}`
            },
            {
              title: "Neighborhood Expertise",
              description: "Showcase your knowledge of local areas"
            }
          ]
        }))
      })
    }
  })

  // Write the generated data to a file
  const outputPath = path.join(process.cwd(), 'src/data/generatedLocations.ts')
  const outputContent = `
import { StateData } from '../app/locations/[state]/page'

export const stateData: StateData = ${JSON.stringify(stateData, null, 2)}
`

  fs.writeFileSync(outputPath, outputContent)
  console.log('Location data generated successfully!')
}

// Run the generator
generateLocationData().catch(console.error) 