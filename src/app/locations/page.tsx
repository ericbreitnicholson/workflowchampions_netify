import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { stateData } from './[state]/page'

export const metadata: Metadata = {
  title: 'Local Real Estate SEO Services by City | Workflow Champions',
  description: 'Find expert real estate SEO services in your city. We help realtors and agents dominate local searches with proven strategies. Guaranteed results or you don\'t pay.',
  keywords: 'local real estate seo, real estate seo by city, realtor seo services, local seo services, real estate marketing',
  openGraph: {
    title: 'Local Real Estate SEO Services by City | Workflow Champions',
    description: 'Find expert real estate SEO services in your city. We help realtors and agents dominate local searches with proven strategies. Guaranteed results or you don\'t pay.',
    images: [
      {
        url: 'https://workflowchampions.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Real Estate SEO Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Real Estate SEO Services by City | Workflow Champions',
    description: 'Find expert real estate SEO services in your city. We help realtors and agents dominate local searches with proven strategies. Guaranteed results or you don\'t pay.',
    images: ['https://workflowchampions.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://workflowchampions.com/locations'
  }
}

export default function LocationsPage() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Local real estate market"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Local Real Estate SEO Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Dominate real estate searches in your local market. Our city-specific SEO strategies help agents and realtors attract quality leads and grow their business. <span className="font-semibold text-primary-200">100% Satisfaction Guarantee: No Rankings, No Payment</span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://calendly.com/eric-workflowchampions/30min"
                  className="btn-primary"
                >
                  Get Your Local SEO Strategy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured States Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Real Estate Markets
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our specialized SEO services in these high-demand real estate markets. Each state has unique strategies tailored to local buyer and seller behavior.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/locations/california" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="California real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">California</h3>
                <p className="mt-2 text-gray-200">Luxury & coastal properties</p>
              </div>
            </Link>
            
            <Link href="/locations/new-york" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="New York real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">New York</h3>
                <p className="mt-2 text-gray-200">Urban & suburban excellence</p>
              </div>
            </Link>

            <Link href="/locations/texas" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Texas real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">Texas</h3>
                <p className="mt-2 text-gray-200">Growing metropolitan markets</p>
              </div>
            </Link>

            <Link href="/locations/arizona" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Arizona real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">Arizona</h3>
                <p className="mt-2 text-gray-200">Desert luxury living</p>
              </div>
            </Link>

            <Link href="/locations/florida" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Florida real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">Florida</h3>
                <p className="mt-2 text-gray-200">Tropical paradise properties</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Popular Cities Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Cities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our specialized SEO services in these major real estate markets
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">California</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/california/los-angeles/beverly-hills" className="text-gray-600 hover:text-primary-600">Beverly Hills</Link></li>
                <li><Link href="/locations/california/los-angeles/santa-monica" className="text-gray-600 hover:text-primary-600">Santa Monica</Link></li>
                <li><Link href="/locations/california/orange-county/newport-beach" className="text-gray-600 hover:text-primary-600">Newport Beach</Link></li>
                <li><Link href="/locations/california/san-francisco" className="text-gray-600 hover:text-primary-600">San Francisco</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">New York</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/new-york/manhattan" className="text-gray-600 hover:text-primary-600">Manhattan</Link></li>
                <li><Link href="/locations/new-york/brooklyn" className="text-gray-600 hover:text-primary-600">Brooklyn</Link></li>
                <li><Link href="/locations/new-york/long-island" className="text-gray-600 hover:text-primary-600">Long Island</Link></li>
                <li><Link href="/locations/new-york/westchester" className="text-gray-600 hover:text-primary-600">Westchester</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Texas</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/texas/harris-county/houston" className="text-gray-600 hover:text-primary-600">Houston</Link></li>
                <li><Link href="/locations/texas/dallas-county/dallas" className="text-gray-600 hover:text-primary-600">Dallas</Link></li>
                <li><Link href="/locations/texas/travis-county/austin" className="text-gray-600 hover:text-primary-600">Austin</Link></li>
                <li><Link href="/locations/texas/bexar-county/san-antonio" className="text-gray-600 hover:text-primary-600">San Antonio</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Arizona</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/arizona/maricopa-county/phoenix" className="text-gray-600 hover:text-primary-600">Phoenix</Link></li>
                <li><Link href="/locations/arizona/maricopa-county/scottsdale" className="text-gray-600 hover:text-primary-600">Scottsdale</Link></li>
                <li><Link href="/locations/arizona/pima-county/tucson" className="text-gray-600 hover:text-primary-600">Tucson</Link></li>
                <li><Link href="/locations/arizona/maricopa-county/paradise-valley" className="text-gray-600 hover:text-primary-600">Paradise Valley</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Florida</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/florida/miami-dade" className="text-gray-600 hover:text-primary-600">Miami</Link></li>
                <li><Link href="/locations/florida/palm-beach-county/palm-beach" className="text-gray-600 hover:text-primary-600">Palm Beach</Link></li>
                <li><Link href="/locations/florida/orange-county/orlando" className="text-gray-600 hover:text-primary-600">Orlando</Link></li>
                <li><Link href="/locations/florida/hillsborough-county/tampa" className="text-gray-600 hover:text-primary-600">Tampa</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Workflow Champions - Local Real Estate SEO Services",
            "description": "Expert real estate SEO services tailored to your local market. We help realtors and agents dominate local searches with proven strategies.",
            "url": "https://workflowchampions.com/locations",
            "areaServed": [
              {
                "@type": "State",
                "name": "California"
              },
              {
                "@type": "State",
                "name": "New York"
              },
              {
                "@type": "State",
                "name": "Texas"
              },
              {
                "@type": "State",
                "name": "Arizona"
              },
              {
                "@type": "State",
                "name": "Florida"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Local Real Estate SEO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local SEO Strategy",
                    "description": "Customized SEO strategies for your local real estate market"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Guarantee",
                    "description": "No rankings improvement, no payment guarantee"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "27"
            }
          })
        }}
      />
    </div>
  )
} 