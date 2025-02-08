import { StateData } from '../app/locations/[state]/page'

export const stateImages: { [key: string]: string } = {
  'california': 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'texas': 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'florida': 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'new-york': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  // Add more state images as needed
}

function generateMarketStats(cityName: string) {
  return [
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
  ]
}

function generateNeighborhoods(cityName: string) {
  return [
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
  ]
}

function generateSeoStrategies(cityName: string) {
  return [
    {
      title: "Local Search Optimization",
      description: `Target high-intent buyers in ${cityName}`
    },
    {
      title: "Neighborhood Expertise",
      description: "Showcase your knowledge of local areas"
    }
  ]
}

export function generateLocationData(): StateData {
  // This function will be populated with the CSV data
  const stateData: StateData = {
    // Template structure - will be populated programmatically
  }
  
  return stateData
} 