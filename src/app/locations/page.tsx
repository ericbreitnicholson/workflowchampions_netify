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

      {/* Popular Cities Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Cities by State
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our specialized SEO services across the United States
            </p>
          </div>

          {/* States 1-50 in groups of 5 */}
          {/* ... Previous state groups ... */}

          {/* States 46-50 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Virginia</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/virginia/virginia-beach/virginia-beach" className="text-gray-600 hover:text-primary-600">Virginia Beach</Link></li>
                <li><Link href="/locations/virginia/fairfax/alexandria" className="text-gray-600 hover:text-primary-600">Alexandria</Link></li>
                <li><Link href="/locations/virginia/henrico/henrico" className="text-gray-600 hover:text-primary-600">Henrico</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Washington</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/washington/king/seattle" className="text-gray-600 hover:text-primary-600">Seattle</Link></li>
                <li><Link href="/locations/washington/pierce/tacoma" className="text-gray-600 hover:text-primary-600">Tacoma</Link></li>
                <li><Link href="/locations/washington/spokane/spokane" className="text-gray-600 hover:text-primary-600">Spokane</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">West Virginia</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/west-virginia/kanawha/charleston" className="text-gray-600 hover:text-primary-600">Charleston</Link></li>
                <li><Link href="/locations/west-virginia/cabell/huntington" className="text-gray-600 hover:text-primary-600">Huntington</Link></li>
                <li><Link href="/locations/west-virginia/monongalia/morgantown" className="text-gray-600 hover:text-primary-600">Morgantown</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Wisconsin</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/wisconsin/milwaukee/milwaukee" className="text-gray-600 hover:text-primary-600">Milwaukee</Link></li>
                <li><Link href="/locations/wisconsin/dane/madison" className="text-gray-600 hover:text-primary-600">Madison</Link></li>
                <li><Link href="/locations/wisconsin/brown/green-bay" className="text-gray-600 hover:text-primary-600">Green Bay</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Wyoming</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/wyoming/laramie/cheyenne" className="text-gray-600 hover:text-primary-600">Cheyenne</Link></li>
                <li><Link href="/locations/wyoming/natrona/casper" className="text-gray-600 hover:text-primary-600">Casper</Link></li>
                <li><Link href="/locations/wyoming/fremont/riverton" className="text-gray-600 hover:text-primary-600">Riverton</Link></li>
              </ul>
            </div>
          </div>

          {/* CTA 10 */}
          <div className="mt-16 text-center">
            <Link
              href="https://calendly.com/eric-workflowchampions/30min"
              className="btn-primary inline-block"
            >
              Start Your SEO Journey Today
            </Link>
          </div>

          {/* Territories and Districts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center mb-12">
              U.S. Territories and Districts
            </h2>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">District of Columbia</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/district-of-columbia/district-of-columbia/washington" className="text-gray-600 hover:text-primary-600">Washington</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Puerto Rico</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/puerto-rico/san-juan/san-juan" className="text-gray-600 hover:text-primary-600">San Juan</Link></li>
                  <li><Link href="/locations/puerto-rico/ponce/ponce" className="text-gray-600 hover:text-primary-600">Ponce</Link></li>
                  <li><Link href="/locations/puerto-rico/bayamon/bayamon" className="text-gray-600 hover:text-primary-600">Bayamon</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Guam</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/guam/guam/hagatna" className="text-gray-600 hover:text-primary-600">Hagatna</Link></li>
                  <li><Link href="/locations/guam/guam/barrigada" className="text-gray-600 hover:text-primary-600">Barrigada</Link></li>
                  <li><Link href="/locations/guam/guam/merizo" className="text-gray-600 hover:text-primary-600">Merizo</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">U.S. Virgin Islands</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/virgin-islands/st-thomas/st-thomas" className="text-gray-600 hover:text-primary-600">St. Thomas</Link></li>
                  <li><Link href="/locations/virgin-islands/st-croix/christiansted" className="text-gray-600 hover:text-primary-600">Christiansted</Link></li>
                  <li><Link href="/locations/virgin-islands/st-john/st-john" className="text-gray-600 hover:text-primary-600">St. John</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Northern Mariana Islands</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/northern-mariana-islands/saipan/saipan" className="text-gray-600 hover:text-primary-600">Saipan</Link></li>
                  <li><Link href="/locations/northern-mariana-islands/tinian/tinian" className="text-gray-600 hover:text-primary-600">Tinian</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">American Samoa</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/american-samoa/western/pago-pago" className="text-gray-600 hover:text-primary-600">Pago Pago</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Link
              href="https://calendly.com/eric-workflowchampions/30min"
              className="btn-primary inline-block"
            >
              Grow Your Real Estate Business Today
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
            "name": "Workflow Champions",
            "description": "Expert Real Estate SEO services across the United States. Dominate local searches with proven strategies.",
            "url": "https://workflowchampions.com/locations",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
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