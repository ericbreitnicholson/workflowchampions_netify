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
  if (countyName === 'Miami-Dade') {
    return `Dominate Miami-Dade's competitive real estate market with our proven SEO strategies. From Miami Beach to Coral Gables, we help agents capture high-intent buyers and sellers through targeted local search optimization.`
  }
  return `Supporting real estate professionals throughout ${countyName}, showcasing the unique opportunities in this thriving region of ${stateName}.`
}

// Helper function to get city description
function getCityDescription(cityName: string, countyName: string): string {
  if (cityName === 'Miami') {
    return `Expert real estate SEO services in Miami, helping agents dominate local search results and connect with qualified buyers and sellers. Our proven strategies ensure your visibility in Miami's dynamic property market.`
  }
  if (cityName === 'Miami Beach') {
    return `Specialized real estate SEO services for Miami Beach agents, focusing on luxury properties and beachfront listings. Our strategies help you stand out in this prestigious market.`
  }
  return `Expert real estate SEO services in ${cityName}, helping agents connect with qualified buyers and sellers in ${countyName}.`
}

// Helper function to generate market stats for a city
function generateMarketStats(cityName: string) {
  if (cityName === 'Miami') {
    return [
      {
        label: "Average Home Price",
        value: "$625,000",
        description: "Median home value in Miami"
      },
      {
        label: "Market Growth",
        value: "10.5%",
        description: "Annual market appreciation"
      },
      {
        label: "Days on Market",
        value: "25",
        description: "Average days to sell a property"
      }
    ]
  }
  if (cityName === 'Miami Beach') {
    return [
      {
        label: "Average Home Price",
        value: "$850,000",
        description: "Median home value in Miami Beach"
      },
      {
        label: "Market Growth",
        value: "11.2%",
        description: "Annual market appreciation"
      },
      {
        label: "Days on Market",
        value: "28",
        description: "Average days to sell a property"
      }
    ]
  }
  // Default randomized stats for other cities
  const basePrice = 350000 + Math.floor(Math.random() * 300000)
  const growth = 5 + Math.floor(Math.random() * 7)
  const days = 20 + Math.floor(Math.random() * 20)
  
  return [
    {
      label: "Average Home Price",
      value: `$${basePrice.toLocaleString()}`,
      description: `Median home value in ${cityName}`
    },
    {
      label: "Market Growth",
      value: `${growth}%`,
      description: "Annual market appreciation"
    },
    {
      label: "Days on Market",
      value: days.toString(),
      description: "Average days to sell a property"
    }
  ]
}

// Helper function to generate neighborhoods for a city
function generateNeighborhoods(cityName: string) {
  if (cityName === 'Miami') {
    return [
      {
        name: "Brickell",
        description: "Miami's sophisticated financial district with luxury condos and waterfront properties",
        features: ["Luxury Living", "Financial Hub", "Waterfront Views"]
      },
      {
        name: "Coconut Grove",
        description: "Historic bayside community known for its lush landscapes and artistic vibe",
        features: ["Historic Charm", "Waterfront", "Cultural Hub"]
      },
      {
        name: "Coral Way",
        description: "Tree-lined residential area with Mediterranean revival architecture",
        features: ["Family-Friendly", "Historic Homes", "Central Location"]
      }
    ]
  }
  if (cityName === 'Miami Beach') {
    return [
      {
        name: "South Beach",
        description: "Iconic Art Deco district with vibrant lifestyle and beachfront properties",
        features: ["Art Deco", "Beach Access", "Nightlife"]
      },
      {
        name: "Mid-Beach",
        description: "Upscale residential area with luxury condos and historic homes",
        features: ["Luxury Living", "Ocean Views", "Resort Style"]
      },
      {
        name: "North Beach",
        description: "Family-friendly area with a mix of condos and single-family homes",
        features: ["Family-Friendly", "Beachfront", "Local Charm"]
      }
    ]
  }
  // Default neighborhoods for other cities
  const areas = [
    ["Downtown", "Urban core", ["Nightlife", "Shopping", "Culture"]],
    ["Historic District", "Heritage area", ["Historic Homes", "Parks", "Community"]],
    ["Suburban Heights", "Family-friendly area", ["Schools", "Parks", "Safety"]],
    ["University District", "Educational hub", ["Campus Life", "Research", "Innovation"]]
  ]
  
  const selectedAreas = areas.sort(() => 0.5 - Math.random()).slice(0, 2 + Math.floor(Math.random() * 2))
  
  return selectedAreas.map(([name, desc, features]) => ({
    name: `${name}`,
    description: `${cityName}'s ${desc}`,
    features: features as string[]
  }))
}

// Helper function to generate SEO strategies for a city
function generateSeoStrategies(cityName: string) {
  if (cityName === 'Miami') {
    return [
      {
        title: "Miami SEO Domination",
        description: "Comprehensive local search optimization for Miami's unique market"
      },
      {
        title: "Multilingual SEO",
        description: "Target both English and Spanish-speaking clients effectively"
      },
      {
        title: "Neighborhood Authority",
        description: "Build expertise in specific Miami neighborhoods"
      }
    ]
  }
  if (cityName === 'Miami Beach') {
    return [
      {
        title: "Luxury Market Focus",
        description: "Target high-net-worth buyers and international investors"
      },
      {
        title: "Visual SEO",
        description: "Optimize property imagery for maximum impact"
      },
      {
        title: "Local Area Marketing",
        description: "Showcase neighborhood expertise and lifestyle benefits"
      }
    ]
  }
  return [
    {
      title: "Local Search Optimization",
      description: `Target high-intent buyers in ${cityName}`
    },
    {
      title: "Neighborhood Expertise",
      description: "Showcase your knowledge of local areas"
    },
    {
      title: "Market Analysis Content",
      description: "Share insights on local market trends"
    }
  ]
}

// Main function to generate location data
async function generateLocationData(): Promise<void> {
  // Read the CSV file
  const csvPath = path.join(process.cwd(), 'State-County-City.csv')
  const csvContent = fs.readFileSync(csvPath, 'utf-8')
  
  // Parse CSV content
  const lines = csvContent.split('\n').slice(1) // Skip header
  const locationData = lines
    .filter(line => line.trim())
    .map(line => {
      const [state, county, city] = line.split(',').map(str => str.trim())
      return { state, county, city }
    })

  // Generate state data structure
  const stateData: StateData = {}

  locationData.forEach(({ state, county, city }) => {
    const stateSlug = toSlug(state)
    const countySlug = toSlug(county)
    const citySlug = toSlug(city)
    
    // Initialize state if it doesn't exist
    if (!stateData[stateSlug]) {
      stateData[stateSlug] = {
        name: state.replace(/-/g, ' '),
        description: getStateDescription(state.replace(/-/g, ' ')),
        image: stateImages[stateSlug] || 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        counties: []
      }
    }

    // Find or create county
    let countyData = stateData[stateSlug].counties.find(c => c.slug === countySlug)
    if (!countyData) {
      if (county === 'Miami-Dade') {
        countyData = {
          name: county.replace(/-/g, ' '),
          slug: countySlug,
          description: getCountyDescription(county.replace(/-/g, ' '), state.replace(/-/g, ' ')),
          image: 'https://images.unsplash.com/photo-1503891617560-5b8c2e28cbf6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          cities: []
        }
      } else {
        countyData = {
          name: county.replace(/-/g, ' '),
          slug: countySlug,
          description: getCountyDescription(county.replace(/-/g, ' '), state.replace(/-/g, ' ')),
          image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`,
          cities: []
        }
      }
      stateData[stateSlug].counties.push(countyData)
    }

    // Add city if it doesn't exist
    const existingCity = countyData.cities.find(c => c.slug === citySlug)
    if (!existingCity) {
      const cityName = city.replace(/-/g, ' ')
      const cityImages: Record<string, string> = {
        'miami': 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'miami-beach': 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      }
      const cityImage = cityImages[citySlug] || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`
      countyData.cities.push({
        name: cityName,
        slug: citySlug,
        description: getCityDescription(cityName, county.replace(/-/g, ' ')),
        image: cityImage,
        marketStats: generateMarketStats(cityName),
        neighborhoods: generateNeighborhoods(cityName),
        seoStrategies: generateSeoStrategies(cityName)
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