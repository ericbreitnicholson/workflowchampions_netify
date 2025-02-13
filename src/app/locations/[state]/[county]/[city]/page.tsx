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

// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function generateMetadata({ params }: { params: CityParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find(c => c.slug === params.county)
  if (!county) return notFound()

  const cityData = county.cities.find(c => c.slug === params.city)
  if (!cityData) return notFound()

  const title = `Best SEO Services in ${cityData.name} - Workflow Champions`
  const description = `Expert Real Estate SEO services in ${cityData.name}, ${county.name}. Dominate local searches with proven strategies. #1 rated agency for realtors and agents in ${cityData.name}. Free consultation.`
  const keywords = `${cityData.name.toLowerCase()} real estate seo, ${cityData.name.toLowerCase()} realtor marketing, ${cityData.name.toLowerCase()} real estate agent seo, local seo ${cityData.name.toLowerCase()}, ${state.name.toLowerCase()} real estate marketing, seo services ${cityData.name.toLowerCase()}, best seo company in ${cityData.name.toLowerCase()}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [
        {
          url: cityData.image || county.image || state.image,
          width: 1200,
          height: 630,
          alt: `${cityData.name} Real Estate Market - Workflow Champions SEO Services`,
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
      images: [cityData.image || county.image || state.image],
      site: '@workflowchamps',
    },
    alternates: {
      canonical: `https://workflowchampions.com/locations/${params.state}/${params.county}/${params.city}`
    }
  }
}

export default function CityPage({ params }: { params: CityParams }) {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find(c => c.slug === params.county)
  if (!county) return notFound()

  const cityData = county.cities.find(c => c.slug === params.city)
  if (!cityData) return notFound()

  // Define main content sections
  const mainSections = shuffleArray([
    // Market Stats Section
    <div key="market-stats" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Highly Rated SEO Company in {cityData.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience how our locally-tailored SEO strategies have helped {cityData.name} real estate agents connect with buyers and sellers who appreciate the unique lifestyle and community character of this area.
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
    </div>,

    // Neighborhoods Section
    <div key="neighborhoods" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            SEO Optimization in {cityData.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Showcasing the distinct character of each {cityData.name} neighborhood to attract your ideal clients and establish your expertise in these sought-after communities.
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
    </div>,

    // SEO Strategy Section
    <div key="seo-strategy" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
            Top SEO Agency in {cityData.name}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cityData.seoStrategies.map((strategy) => (
              <div key={strategy.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-primary-200 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                <p className="text-gray-600">Specialized {cityData.name}-focused {strategy.description.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,

    // Related Cities Section
    <div key="related-cities" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Other Cities in {county.name}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore the vibrant communities that make up our diverse region.
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
  ]);

  return (
    <div>
      <Navigation />
      
      {/* Hero Section - Always First */}
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
            <div className="mx-auto max-w-2xl text-center hero-text">
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
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
                Best SEO Services in {cityData.name}
              </h1>
              <p className="text-lg leading-8 mb-8 text-gray-200">
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

      {/* Main Content Sections - Randomly Ordered */}
      {mainSections}

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Workflow Champions - ${cityData.name} Real Estate SEO Services`,
            "description": `Expert Real Estate SEO services in ${cityData.name}, ${county.name}, ${state.name}. We help real estate agents dominate their local markets with proven SEO strategies.`,
            "url": `https://workflowchampions.com/locations/${params.state}/${params.county}/${params.city}`,
            "image": cityData.image || county.image || state.image,
            "areaServed": {
              "@type": "City",
              "name": cityData.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": county.name,
                "containedInPlace": {
                  "@type": "State",
                  "name": state.name
                }
              }
            },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "27"
            },
            "makesOffer": cityData.marketStats.map(stat => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": stat.label,
                "description": stat.description
              }
            }))
          })
        }}
      />

      {/* FAQ Schema - Enhanced with more relevant questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `How can I improve my real estate SEO rankings in ${cityData.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Our proven SEO strategies help real estate agents in ${cityData.name} improve their local search rankings through optimized content, technical SEO, and local citations. We focus on keywords and phrases that ${cityData.name} home buyers and sellers actually use.`
                }
              },
              {
                "@type": "Question",
                "name": `What makes ${cityData.name} real estate market unique?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": cityData.description
                }
              },
              {
                "@type": "Question",
                "name": `How much does real estate SEO cost in ${cityData.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `Our ${cityData.name} real estate SEO services are performance-based - you only pay when we improve your rankings. We offer customized packages tailored to your specific needs and market goals in ${cityData.name}.`
                }
              },
              {
                "@type": "Question",
                "name": `How long does it take to see SEO results in ${cityData.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `While initial improvements can be seen within weeks, significant results in ${cityData.name}'s competitive real estate market typically take 3-6 months. We focus on sustainable, long-term growth that continues to deliver results.`
                }
              }
            ]
          })
        }}
      />

      {/* CTA Section - Always Last */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Dominate {cityData.name}'s Real Estate Market?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Elevate your presence in {cityData.name}'s dynamic real estate market with SEO strategies that reflect the area's unique culture and community values. We understand what makes this market special and how to connect you with clients who share your passion for this remarkable city.
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