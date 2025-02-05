import { Metadata } from 'next'
import LocationsContent from '@/components/LocationsContent'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Service Locations | Best Real Estate SEO Services by Location',
  description: 'Find local Real Estate SEO services in your area. We help real estate agents dominate their local markets with proven SEO strategies.',
}

const states = [
  {
    name: "California",
    slug: "california",
    description: "Helping real estate agents dominate search results across the Golden State, from San Francisco to Los Angeles.",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Beverly Hills"]
  },
  {
    name: "Texas",
    slug: "texas",
    description: "Supporting realtors across the Lone Star State with proven SEO strategies that drive results.",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "Plano"]
  },
  {
    name: "Florida",
    slug: "florida",
    description: "Empowering real estate professionals throughout the Sunshine State to capture more qualified leads.",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Naples", "Palm Beach"]
  },
  {
    name: "New York",
    slug: "new-york",
    description: "Delivering cutting-edge SEO solutions to real estate agents across the Empire State.",
    cities: ["New York City", "Brooklyn", "Queens", "Long Island", "Buffalo", "Albany"]
  },
  {
    name: "Arizona",
    slug: "arizona",
    description: "Helping agents stand out in the competitive Arizona real estate market with targeted SEO strategies.",
    cities: ["Phoenix", "Scottsdale", "Tucson", "Mesa", "Paradise Valley", "Gilbert"]
  }
]

export default function Page() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="USA cityscape"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
                Best Real Estate SEO Services in the USA
              </h1>
              <p className="text-lg leading-8 mb-8">
                Dominate your local real estate market with our proven SEO strategies. We help agents:
              </p>
              <ul className="text-left space-y-4 mb-12">
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rank #1 for local property searches
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Capture more qualified leads
                </li>
                <li className="flex items-center">
                  <svg className="h-6 w-6 text-primary-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Build authority in your local market
                </li>
              </ul>
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your Local SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav className="flex flex-wrap justify-center gap-4">
            {states.map((state) => (
              <a
                key={state.slug}
                href={`#${state.slug}`}
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                {state.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* States Grid Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Areas We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Helping real estate agents dominate local search results across the United States.
            </p>
          </div>
          
          <div className="space-y-16">
            {states.map((state) => (
              <div
                key={state.slug}
                id={state.slug}
                className="scroll-mt-20"
              >
                <div className="relative overflow-hidden rounded-lg border border-gray-200 p-8 hover:border-primary-200 transition-colors">
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {state.name}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {state.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Key Cities We Serve:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {state.cities.map((city) => (
                            <li key={city} className="text-gray-600">
                              • {city}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-end justify-end">
                        <Link
                          href="https://calendly.com/eric-workflowchampions/30min"
                          className="btn-primary w-full text-center"
                        >
                          Get Started in {state.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Original Locations Content */}
      <LocationsContent />
    </div>
  )
} 