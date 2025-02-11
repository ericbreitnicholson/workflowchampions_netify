import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'
import { stateData } from '@/data/generatedLocations'

// Define types for our data structure
export type MarketStat = {
  label: string
  value: string
  description: string
}

export type Neighborhood = {
  name: string
  description: string
  features: string[]
}

export type SeoStrategy = {
  title: string
  description: string
}

export type City = {
  name: string
  slug: string
  description: string
  image?: string
  marketStats: MarketStat[]
  neighborhoods: Neighborhood[]
  seoStrategies: SeoStrategy[]
}

export type County = {
  name: string
  slug: string
  description: string
  image?: string
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

// Import state data from generated file
export { stateData } from '@/data/generatedLocations'

type StateParams = {
  state: string
}

export async function generateMetadata({ params }: { params: StateParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const title = `${state.name} Real Estate SEO Services | Top-Rated Agency | Workflow Champions`
  const description = `Expert Real Estate SEO services in ${state.name}. Dominate local searches with proven strategies. #1 rated agency for realtors and agents across ${state.name}. Free consultation.`
  const keywords = `${state.name.toLowerCase()} real estate seo, ${state.name.toLowerCase()} realtor marketing, ${state.name.toLowerCase()} real estate agent seo, local seo ${state.name.toLowerCase()}, real estate marketing ${state.name.toLowerCase()}, seo services ${state.name.toLowerCase()}, best seo company in ${state.name.toLowerCase()}`
  const canonicalUrl = `https://workflowchampions.com/locations/${params.state}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: state.image,
          width: 1200,
          height: 630,
          alt: `${state.name} Real Estate Market - Workflow Champions SEO Services`,
        },
      ],
      locale: 'en_US',
      type: 'website',
      siteName: 'Workflow Champions',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [state.image],
      site: '@workflowchamps',
    },
    alternates: {
      canonical: canonicalUrl
    }
  }
}

// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function StatePage({ params }: { params: StateParams }) {
  const state = stateData[params.state]
  if (!state) return notFound()

  // Define main content sections
  const mainSections = shuffleArray([
    // Counties Grid Section
    <div key="counties-grid" className="bg-white py-24 sm:py-32">
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
          {state.counties.map((county: County) => (
            <Link
              key={county.slug}
              href={`/locations/${String(params.state)}/${county.slug}`}
              className="relative overflow-hidden rounded-lg border border-gray-200 p-8 hover:border-primary-200 transition-colors"
            >
              <div className="relative aspect-[16/9] w-full mb-8 overflow-hidden rounded-lg">
                <Image
                  src={county.image || state.image}
                  alt={`${county.name} real estate market`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {county.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {county.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {county.cities.slice(0, 3).map((city: City) => (
                    <span
                      key={city.slug}
                      className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                    >
                      {city.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 hover:text-primary-500 font-medium">
                    Learn More →
                  </span>
                  <span className="btn-primary">
                    Get Started
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>,

    // State Overview Section
    <div key="state-overview" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top SEO Agency in {state.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering real estate professionals across {state.name} with data-driven SEO strategies that deliver measurable results.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Statewide Expertise</h3>
            <p className="text-gray-600">Specialized knowledge of {state.name}'s diverse real estate markets and buyer preferences.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-County Optimization</h3>
            <p className="text-gray-600">Strategic SEO coverage across all major counties in {state.name} for maximum market presence.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">State Authority Building</h3>
            <p className="text-gray-600">Establish your agency as the go-to real estate authority throughout {state.name}.</p>
          </div>
        </div>
      </div>
    </div>
  ]);

  return (
    <div>
      <Navigation />
      
      {/* Hero Section - Always First */}
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
              <div className="mb-8">
                <Link
                  href="/locations"
                  className="text-primary-200 hover:text-primary-300"
                >
                  ← Back to All Locations
                </Link>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
                Best SEO Services in {state.name}
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

      {/* Main Content Sections - Randomly Ordered */}
      {mainSections}

      {/* CTA Section - Always Last */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Expand Your {state.name} Presence?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join the leading real estate professionals who dominate {state.name}'s online searches. Our statewide SEO strategies ensure your visibility across all major counties and cities.
            </p>
            <div className="mt-10">
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule Your Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 