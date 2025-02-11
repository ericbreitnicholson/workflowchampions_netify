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

// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function generateMetadata({ params }: { params: CountyParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find((c: County) => c.slug === params.county)
  if (!county) return notFound()

  const title = `Best SEO Services in ${county.name} County - Workflow Champions`
  const description = `Expert Real Estate SEO services in ${county.name} County, ${state.name}. Dominate local searches with proven strategies. #1 rated agency for realtors and agents. Free consultation.`
  const keywords = `${county.name.toLowerCase()} county real estate seo, ${county.name.toLowerCase()} county realtor marketing, ${state.name.toLowerCase()} real estate seo, local seo ${county.name.toLowerCase()}, real estate marketing ${state.name.toLowerCase()}`
  const canonicalUrl = `https://workflowchampions.com/locations/${params.state}/${params.county}`

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
          url: county.image || state.image,
          width: 1200,
          height: 630,
          alt: `${county.name} County Real Estate Market - Workflow Champions SEO Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [county.image || state.image],
    },
    alternates: {
      canonical: canonicalUrl
    }
  }
}

export default function CountyPage({ params }: { params: CountyParams }) {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find((c: County) => c.slug === params.county)
  if (!county) return notFound()

  // Define main content sections
  const mainSections = shuffleArray([
    // Cities Section
    <div key="cities" className="bg-white py-24 sm:py-32">
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
    </div>,

    // SEO Benefits Section
    <div key="seo-benefits" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top SEO Agency in {county.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empowering real estate professionals across {county.name} County with data-driven SEO strategies that deliver measurable results.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">County-Wide Expertise</h3>
            <p className="text-gray-600">Specialized knowledge of {county.name} County's diverse real estate submarkets and buyer preferences.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-City Optimization</h3>
            <p className="text-gray-600">Strategic SEO coverage across all major cities in {county.name} County for maximum market presence.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Local Authority Building</h3>
            <p className="text-gray-600">Establish your agency as the go-to real estate authority throughout {county.name} County.</p>
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
            src={county.image || state.image}
            alt={`${county.name} real estate market`}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center hero-text">
              <div className="mb-8">
                <Link
                  href={`/locations/${params.state}`}
                  className="text-primary-200 hover:text-primary-300"
                >
                  ← Back to {state.name}
                </Link>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
                Best SEO Services in {county.name}
              </h1>
              <p className="text-lg leading-8 mb-8 text-gray-200">
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

      {/* Main Content Sections - Randomly Ordered */}
      {mainSections}

      {/* CTA Section - Always Last */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Expand Your {county.name} County Presence?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join the leading real estate professionals who dominate {county.name} County's online searches. Our county-wide SEO strategies ensure your visibility across all major cities and neighborhoods.
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