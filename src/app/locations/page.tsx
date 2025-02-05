import { Metadata } from 'next'
import LocationsContent from '@/components/LocationsContent'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Locations | Best Real Estate SEO Services by Location',
  description: 'Find local Real Estate SEO services in your area. We help real estate agents dominate their local markets with proven SEO strategies.',
}

const counties = [
  {
    name: "Orange County",
    description: "Serving real estate agents in Anaheim, Santa Ana, Irvine, and throughout Orange County.",
    population: "3.2M",
    agents: "12,000+"
  },
  {
    name: "Los Angeles County",
    description: "Supporting realtors across LA, Beverly Hills, Santa Monica, and the greater Los Angeles area.",
    population: "10M",
    agents: "30,000+"
  },
  {
    name: "San Diego County",
    description: "Helping agents succeed in San Diego, La Jolla, Carlsbad, and surrounding communities.",
    population: "3.3M",
    agents: "15,000+"
  },
  {
    name: "Riverside County",
    description: "Serving real estate professionals in Riverside, Palm Springs, and the Coachella Valley.",
    population: "2.5M",
    agents: "8,000+"
  },
  {
    name: "San Bernardino County",
    description: "Supporting agents in San Bernardino, Ontario, Rancho Cucamonga, and beyond.",
    population: "2.2M",
    agents: "7,000+"
  }
]

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="California cityscape"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
                Best SEO Services in Southern California
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

      {/* Counties Grid Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Areas We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Helping real estate agents dominate local search results across Southern California.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {counties.map((county) => (
              <div
                key={county.name}
                className="relative overflow-hidden rounded-lg border border-gray-200 p-8 hover:border-primary-200 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {county.name}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {county.description}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mt-4">
                    <span>Population: {county.population}</span>
                    <span>Active Agents: {county.agents}</span>
                  </div>
                  <Link
                    href="https://calendly.com/eric-workflowchampions/30min"
                    className="mt-6 text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                  >
                    Get Started
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
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