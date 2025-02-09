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

      {/* Featured Cities Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Real Estate Markets
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our specialized SEO services in these high-demand real estate markets. Each city has unique strategies tailored to local buyer and seller behavior.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/locations/california/los-angeles/beverly-hills" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
                  alt="Beverly Hills real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">Beverly Hills</h3>
                <p className="mt-2 text-gray-200">Luxury real estate SEO services</p>
              </div>
            </Link>
            
            <Link href="/locations/california/los-angeles/santa-monica" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Santa Monica real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">Santa Monica</h3>
                <p className="mt-2 text-gray-200">Beachside property marketing</p>
              </div>
            </Link>

            <Link href="/locations/florida/miami-dade" className="group relative overflow-hidden rounded-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Miami-Dade real estate market"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">Miami-Dade</h3>
                <p className="mt-2 text-gray-200">Tropical luxury properties</p>
              </div>
            </Link>
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
                "@type": "City",
                "name": "Beverly Hills"
              },
              {
                "@type": "City",
                "name": "Santa Monica"
              },
              {
                "@type": "City",
                "name": "Miami-Dade"
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