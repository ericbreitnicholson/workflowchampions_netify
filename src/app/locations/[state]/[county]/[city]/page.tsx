import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'
import { stateData } from '../../page'

type CityParams = {
  state: string
  county: string
  city: string
}

export async function generateMetadata({ params }: { params: CityParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find(c => c.slug === params.county)
  if (!county) return notFound()

  const cityData = county.cities.find(c => c.slug === params.city)
  if (!cityData) return notFound()

  return {
    title: `${cityData.name} Real Estate SEO Services | Workflow Champions`,
    description: `Find local Real Estate SEO services in ${cityData.name}, ${county.name}, ${state.name}. We help real estate agents dominate their local markets with proven SEO strategies.`,
  }
}

export default function CityPage({ params }: { params: CityParams }) {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find(c => c.slug === params.county)
  if (!county) return notFound()

  const cityData = county.cities.find(c => c.slug === params.city)
  if (!cityData) return notFound()

  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={cityData.image || county.image || state.image}
            alt={`${cityData.name} real estate market`}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-8 text-primary-200">
                <Link
                  href={`/locations/${params.state}`}
                  className="hover:text-primary-300"
                >
                  {state.name}
                </Link>
                <span>→</span>
                <Link
                  href={`/locations/${params.state}/${params.county}`}
                  className="hover:text-primary-300"
                >
                  {county.name}
                </Link>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
                {cityData.name} Real Estate SEO Services
              </h1>
              <p className="text-lg leading-8 mb-8">
                {cityData.description}
              </p>
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your {cityData.name} SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Market Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {cityData.name} Real Estate Market
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Key insights about the {cityData.name} real estate market.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {cityData.marketStats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-lg border border-gray-200 p-8 hover:border-primary-200 transition-colors"
              >
                <div className="flex flex-col h-full items-center text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Neighborhoods Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular {cityData.name} Neighborhoods
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Key areas where we help real estate agents dominate search results.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {cityData.neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood.name}
                className="relative overflow-hidden rounded-lg border border-gray-200 p-8 hover:border-primary-200 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {neighborhood.name}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {neighborhood.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Strategy Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our {cityData.name} SEO Strategy
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cityData.seoStrategies.map((strategy) => (
                <div key={strategy.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-primary-200 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Cities Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Other Cities in {county.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover more opportunities in nearby cities.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {county.cities
              .filter(c => c.slug !== cityData.slug)
              .slice(0, 3)
              .map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${params.state}/${params.county}/${city.slug}`}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-primary-200 transition-colors"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={city.image || county.image || state.image}
                      alt={`${city.name} real estate market`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600">
                      {city.name}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {city.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Dominate {cityData.name} Real Estate?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join the growing number of successful agents who trust us with their SEO in {cityData.name}. Remember, if your rankings don't improve, you don't pay.
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