import fs from 'fs'
import path from 'path'
import { StateData } from '../app/locations/[state]/page'
import { stateImages } from '../data/locations'

// Add type definitions at the top of the file
type CityDescription = {
  [key: string]: string;
}

type MarketStat = {
  label: string;
  value: string;
  description: string;
}

type CityStats = {
  [key: string]: MarketStat[];
}

type Neighborhood = {
  name: string;
  description: string;
  features: string[];
}

type CityNeighborhoods = {
  [key: string]: Neighborhood[];
}

type SeoStrategy = {
  title: string;
  description: string;
}

type CitySeoStrategies = {
  [key: string]: SeoStrategy[];
}

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
  const descriptions: CityDescription = {
    'Miami': `Expert real estate SEO services in Miami, helping agents dominate local search results and connect with qualified buyers and sellers. Our proven strategies ensure your visibility in Miami's dynamic property market.`,
    'Miami Beach': `Specialized real estate SEO services for Miami Beach agents, focusing on luxury properties and beachfront listings. Our strategies help you stand out in this prestigious market.`,
    'Hialeah': `Comprehensive real estate SEO services in Hialeah, helping agents connect with the vibrant Hispanic community and showcase properties in this dynamic multicultural market.`,
    'Homestead': `Expert real estate SEO services in Homestead, helping agents highlight affordable housing opportunities and agricultural charm while targeting qualified buyers in this growing community.`,
    'Opa Locka': `Specialized real estate SEO services in Opa Locka, helping agents showcase the area's unique Moorish architecture and emerging opportunities in this historic Miami-Dade community.`
  }
  return descriptions[cityName] || `Expert real estate SEO services in ${cityName}, helping agents connect with qualified buyers and sellers in ${countyName}.`
}

// Helper function to generate market stats for a city
function generateMarketStats(cityName: string): MarketStat[] {
  const cityStats: CityStats = {
    'Miami': [
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
    ],
    'Miami Beach': [
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
    ],
    'Hialeah': [
      {
        label: "Average Home Price",
        value: "$425,000",
        description: "Median home value in Hialeah"
      },
      {
        label: "Market Growth",
        value: "9.8%",
        description: "Annual market appreciation"
      },
      {
        label: "Days on Market",
        value: "22",
        description: "Average days to sell a property"
      }
    ],
    'Homestead': [
      {
        label: "Average Home Price",
        value: "$375,000",
        description: "Median home value in Homestead"
      },
      {
        label: "Market Growth",
        value: "12.5%",
        description: "Annual market appreciation"
      },
      {
        label: "Days on Market",
        value: "20",
        description: "Average days to sell a property"
      }
    ],
    'Opa Locka': [
      {
        label: "Average Home Price",
        value: "$295,000",
        description: "Median home value in Opa Locka"
      },
      {
        label: "Market Growth",
        value: "8.5%",
        description: "Annual market appreciation"
      },
      {
        label: "Days on Market",
        value: "30",
        description: "Average days to sell a property"
      }
    ]
  }
  return cityStats[cityName] || generateDefaultStats(cityName)
}

function generateDefaultStats(cityName: string) {
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
function generateNeighborhoods(cityName: string): Neighborhood[] {
  const cityNeighborhoods: CityNeighborhoods = {
    'Hialeah': [
      {
        name: "Palm Springs",
        description: "Family-oriented neighborhood with a mix of single-family homes and apartments",
        features: ["Family-Friendly", "Shopping Centers", "Parks"]
      },
      {
        name: "Hialeah Heights",
        description: "Residential area known for its quiet streets and community atmosphere",
        features: ["Residential", "Schools", "Community"]
      },
      {
        name: "West Hialeah",
        description: "Growing area with new developments and shopping centers",
        features: ["New Development", "Shopping", "Accessibility"]
      }
    ],
    'Homestead': [
      {
        name: "Downtown Homestead",
        description: "Historic district with a mix of commercial and residential properties",
        features: ["Historic", "Shopping", "Dining"]
      },
      {
        name: "Keys Gate",
        description: "Master-planned community with modern amenities",
        features: ["Gated Community", "Amenities", "Family-Friendly"]
      },
      {
        name: "Waterstone",
        description: "Upscale residential area with lakefront properties",
        features: ["Luxury Homes", "Lakes", "Parks"]
      }
    ],
    'Opa Locka': [
      {
        name: "Magnolia North",
        description: "Residential neighborhood with historic Moorish Revival architecture",
        features: ["Historic", "Architecture", "Community"]
      },
      {
        name: "Opa-locka Business District",
        description: "Commercial area with mixed-use developments",
        features: ["Business", "Development", "Central Location"]
      },
      {
        name: "Lake Ingram",
        description: "Waterfront neighborhood with scenic views",
        features: ["Waterfront", "Parks", "Residential"]
      }
    ]
  }
  
  return cityNeighborhoods[cityName] || generateDefaultNeighborhoods(cityName)
}

function generateDefaultNeighborhoods(cityName: string) {
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
function generateSeoStrategies(cityName: string): SeoStrategy[] {
  const citySeoStrategies: CitySeoStrategies = {
    'Hialeah': [
      {
        title: "Bilingual SEO Excellence",
        description: "Optimize for both English and Spanish searches to maximize reach"
      },
      {
        title: "Local Market Focus",
        description: "Target specific Hialeah neighborhoods and communities"
      },
      {
        title: "Cultural Marketing",
        description: "Highlight Hispanic heritage and community connections"
      }
    ],
    'Homestead': [
      {
        title: "Affordable Housing Focus",
        description: "Target first-time homebuyers and growing families"
      },
      {
        title: "Agricultural Appeal",
        description: "Showcase unique properties with agricultural potential"
      },
      {
        title: "Community Growth",
        description: "Highlight development and investment opportunities"
      }
    ],
    'Opa Locka': [
      {
        title: "Historical Value",
        description: "Emphasize unique architecture and historical significance"
      },
      {
        title: "Investment Potential",
        description: "Target investors and developers in growing areas"
      },
      {
        title: "Community Development",
        description: "Highlight neighborhood improvements and opportunities"
      }
    ]
  }
  
  return citySeoStrategies[cityName] || generateDefaultSeoStrategies(cityName)
}

function generateDefaultSeoStrategies(cityName: string) {
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
        'florida/miami-dade/miami': 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'florida/miami-dade/miami-beach': 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'florida/miami-dade/hialeah': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'florida/miami-dade/homestead': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'florida/miami-dade/opa-locka': 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'texas/harris/houston': 'https://images.unsplash.com/photo-1510623425998-4894a2ad0da9?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'ohio/cuyahoga/lakewood': 'https://images.unsplash.com/photo-1545433243-0a87e3fed9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'florida/palm-beach/lake-worth': 'https://images.unsplash.com/photo-1581391534864-5b4d7c038370?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
      const locationKey = `${stateSlug}/${countySlug}/${citySlug}`
      const cityImage = cityImages[locationKey] || `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`
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