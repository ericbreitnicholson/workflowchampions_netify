import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'

// Define types for our data structure
export type City = string

export type County = {
  name: string
  slug: string
  description: string
  cities: City[]
}

export type State = {
  name: string
  description: string
  image: string
  counties: County[]
}

export type StateData = {
  [key: string]: State
}

// Define state data with counties
export const stateData: StateData = {
  california: {
    name: "California",
    description: "Helping real estate agents dominate search results across the Golden State.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Los Angeles County",
        slug: "los-angeles",
        description: "Home to Hollywood and diverse real estate opportunities.",
        cities: ["Los Angeles", "Beverly Hills", "Santa Monica", "Pasadena", "Long Beach"]
      },
      {
        name: "Orange County",
        slug: "orange",
        description: "Luxury real estate and beautiful coastal properties.",
        cities: ["Newport Beach", "Irvine", "Anaheim", "Laguna Beach", "Huntington Beach"]
      },
      {
        name: "San Diego County",
        slug: "san-diego",
        description: "Perfect weather and stunning coastal properties.",
        cities: ["San Diego", "La Jolla", "Coronado", "Carlsbad", "Encinitas"]
      },
      {
        name: "San Francisco County",
        slug: "san-francisco",
        description: "Tech hub with iconic Victorian architecture.",
        cities: ["San Francisco", "South Beach", "Pacific Heights", "Marina District", "Noe Valley"]
      },
      {
        name: "Santa Clara County",
        slug: "santa-clara",
        description: "Silicon Valley's tech-driven real estate market.",
        cities: ["San Jose", "Palo Alto", "Mountain View", "Cupertino", "Sunnyvale"]
      }
    ]
  },
  texas: {
    name: "Texas",
    description: "Supporting realtors across the Lone Star State with proven SEO strategies.",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Harris County",
        slug: "harris",
        description: "Houston metro area's diverse real estate market.",
        cities: ["Houston", "The Woodlands", "Sugar Land", "Katy", "Pearland"]
      },
      {
        name: "Dallas County",
        slug: "dallas",
        description: "Dynamic urban and suburban properties.",
        cities: ["Dallas", "Highland Park", "Richardson", "Garland", "Irving"]
      },
      {
        name: "Travis County",
        slug: "travis",
        description: "Austin's booming tech-driven market.",
        cities: ["Austin", "West Lake Hills", "Rollingwood", "Bee Cave", "Lakeway"]
      },
      {
        name: "Bexar County",
        slug: "bexar",
        description: "Historic San Antonio and growing suburbs.",
        cities: ["San Antonio", "Alamo Heights", "Terrell Hills", "Castle Hills", "Shavano Park"]
      },
      {
        name: "Collin County",
        slug: "collin",
        description: "Rapidly growing north Dallas suburbs.",
        cities: ["Plano", "Frisco", "McKinney", "Allen", "Prosper"]
      }
    ]
  },
  florida: {
    name: "Florida",
    description: "Empowering real estate professionals throughout the Sunshine State.",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Miami-Dade County",
        slug: "miami-dade",
        description: "Luxury condos and tropical properties.",
        cities: ["Miami", "Miami Beach", "Coral Gables", "Aventura", "Key Biscayne"]
      },
      {
        name: "Orange County",
        slug: "orange",
        description: "Theme park capital and growing suburbs.",
        cities: ["Orlando", "Winter Park", "Windermere", "Lake Buena Vista", "Winter Garden"]
      },
      {
        name: "Palm Beach County",
        slug: "palm-beach",
        description: "Luxury estates and oceanfront properties.",
        cities: ["Palm Beach", "Boca Raton", "Jupiter", "Wellington", "Delray Beach"]
      },
      {
        name: "Hillsborough County",
        slug: "hillsborough",
        description: "Tampa Bay area's diverse market.",
        cities: ["Tampa", "Brandon", "Temple Terrace", "Plant City", "Apollo Beach"]
      },
      {
        name: "Broward County",
        slug: "broward",
        description: "Coastal living and suburban comfort.",
        cities: ["Fort Lauderdale", "Hollywood", "Pompano Beach", "Coral Springs", "Weston"]
      }
    ]
  },
  "new-york": {
    name: "New York",
    description: "Delivering cutting-edge SEO solutions to real estate agents across the Empire State.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "New York County",
        slug: "new-york",
        description: "Manhattan's iconic real estate market.",
        cities: ["Manhattan", "Upper East Side", "Upper West Side", "Tribeca", "SoHo"]
      },
      {
        name: "Kings County",
        slug: "kings",
        description: "Brooklyn's diverse neighborhoods.",
        cities: ["Brooklyn Heights", "Williamsburg", "Park Slope", "DUMBO", "Bay Ridge"]
      },
      {
        name: "Queens County",
        slug: "queens",
        description: "NYC's most diverse borough.",
        cities: ["Astoria", "Long Island City", "Forest Hills", "Flushing", "Bayside"]
      },
      {
        name: "Nassau County",
        slug: "nassau",
        description: "Long Island's prestigious suburbs.",
        cities: ["Garden City", "Great Neck", "Manhasset", "Oyster Bay", "Port Washington"]
      },
      {
        name: "Westchester County",
        slug: "westchester",
        description: "Upscale suburban communities.",
        cities: ["White Plains", "Scarsdale", "Rye", "Bronxville", "Chappaqua"]
      }
    ]
  },
  arizona: {
    name: "Arizona",
    description: "Helping agents stand out in the competitive Arizona real estate market.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Maricopa County",
        slug: "maricopa",
        description: "Phoenix metro's dynamic market.",
        cities: ["Phoenix", "Scottsdale", "Mesa", "Chandler", "Gilbert"]
      },
      {
        name: "Pima County",
        slug: "pima",
        description: "Tucson's growing communities.",
        cities: ["Tucson", "Oro Valley", "Marana", "Sahuarita", "Catalina Foothills"]
      },
      {
        name: "Coconino County",
        slug: "coconino",
        description: "Mountain living and outdoor lifestyle.",
        cities: ["Flagstaff", "Sedona", "Page", "Williams", "Grand Canyon Village"]
      },
      {
        name: "Yavapai County",
        slug: "yavapai",
        description: "Historic towns and retirement communities.",
        cities: ["Prescott", "Sedona", "Prescott Valley", "Cottonwood", "Camp Verde"]
      },
      {
        name: "Pinal County",
        slug: "pinal",
        description: "Growing communities between Phoenix and Tucson.",
        cities: ["Casa Grande", "Apache Junction", "Florence", "Maricopa", "San Tan Valley"]
      }
    ]
  }
}

type StateParams = {
  state: keyof typeof stateData
}

export async function generateMetadata({ params }: { params: StateParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  return {
    title: `${state.name} Real Estate SEO Services | Workflow Champions`,
    description: `Find local Real Estate SEO services in ${state.name}. We help real estate agents dominate their local markets with proven SEO strategies.`,
  }
}

export default function StatePage({ params }: { params: StateParams }) {
  const state = stateData[params.state]
  if (!state) return notFound()

  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={state.image}
            alt={`${state.name} real estate market`}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
                {state.name} Real Estate SEO Services
              </h1>
              <p className="text-lg leading-8 mb-8">
                {state.description}
              </p>
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your {state.name} SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Counties Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Counties We Serve in {state.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Helping real estate agents dominate local search results across {state.name}.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {state.counties.map((county) => (
              <div
                key={county.slug}
                className="relative overflow-hidden rounded-lg border border-gray-200 p-8 hover:border-primary-200 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {county.name}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {county.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Cities:</h4>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {county.cities.map((city) => (
                        <li key={city} className="text-gray-600">
                          • {city}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/locations/${params.state}/${county.slug}`}
                      className="btn-primary w-full text-center"
                    >
                      Learn More About {county.name}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 