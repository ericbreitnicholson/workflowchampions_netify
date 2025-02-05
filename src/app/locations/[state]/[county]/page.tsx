import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'
import { stateData, type County, type City } from '../page'

type CountyParams = {
  state: string
  county: string
}

export async function generateMetadata({ params }: { params: CountyParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find((c: County) => c.slug === params.county)
  if (!county) return notFound()

  return {
    title: `${county.name} Real Estate SEO Services | Workflow Champions`,
    description: `Find local Real Estate SEO services in ${county.name}, ${state.name}. We help real estate agents dominate their local markets with proven SEO strategies.`,
  }
}

export default function CountyPage({ params }: { params: CountyParams }) {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find((c: County) => c.slug === params.county)
  if (!county) return notFound()

  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={county.image || state.image}
            alt={`${county.name} real estate market`}
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
                  href={`/locations/${params.state}`}
                  className="text-primary-200 hover:text-primary-300"
                >
                  ← Back to {state.name}
                </Link>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
                {county.name} Real Estate SEO Services
              </h1>
              <p className="text-lg leading-8 mb-8">
                {county.description}
              </p>
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your {county.name} SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cities We Serve in {county.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Helping real estate agents dominate local search results in every major city.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {county.cities.map((city) => (
              <div
                key={city.slug}
                className="relative overflow-hidden rounded-lg border border-gray-200 hover:border-primary-200 transition-colors"
              >
                {/* City Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={city.image || state.image}
                    alt={`${city.name} real estate market`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                </div>
                
                <div className="p-8">
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      <Link 
                        href={`/locations/${params.state}/${params.county}/${city.slug}`}
                        className="hover:text-primary-600"
                      >
                        {city.name}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {city.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {city.neighborhoods.slice(0, 2).map((neighborhood) => (
                        <span
                          key={neighborhood.name}
                          className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                        >
                          {neighborhood.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Link
                        href={`/locations/${params.state}/${params.county}/${city.slug}`}
                        className="text-primary-600 hover:text-primary-500 font-medium"
                      >
                        Learn More →
                      </Link>
                      <Link
                        href="https://calendly.com/eric-workflowchampions/30min"
                        className="btn-primary"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Why Choose Our {county.name} SEO Services?
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Market Expertise</h3>
                <p className="text-gray-600">Deep understanding of {county.name}'s unique real estate landscape.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Targeted Traffic</h3>
                <p className="text-gray-600">Attract high-intent buyers and sellers in your specific area.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">Track record of success with real estate agents in {county.name}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Dominate {county.name} Real Estate?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join the growing number of successful agents who trust us with their SEO. Remember, if your rankings don't improve, you don't pay.
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