import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { stateData } from '../locations/[state]/page'

export const metadata: Metadata = {
  title: 'Sitemap | Workflow Champions',
  description: 'Complete sitemap of Workflow Champions website, listing all our pages and services.',
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sitemap
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A complete list of all pages on our website.
            </p>
          </div>

          <div className="grid gap-16">
            {/* Main Pages */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Main Pages</h2>
              <ul className="grid gap-3">
                <li><a href="/" className="text-primary-600 hover:text-primary-500">Home</a></li>
                <li><a href="/services" className="text-primary-600 hover:text-primary-500">Services</a></li>
                <li><a href="/locations" className="text-primary-600 hover:text-primary-500">Locations</a></li>
                <li><a href="/about" className="text-primary-600 hover:text-primary-500">About</a></li>
                <li><a href="/contact" className="text-primary-600 hover:text-primary-500">Contact</a></li>
              </ul>
            </div>

            {/* Location Pages */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Location Pages</h2>
              {Object.entries(stateData).map(([stateSlug, state]) => (
                <div key={stateSlug} className="mb-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    <a href={`/locations/${stateSlug}`} className="text-primary-600 hover:text-primary-500">
                      {state.name}
                    </a>
                  </h3>
                  <div className="pl-6">
                    {state.counties.map((county) => (
                      <div key={county.slug} className="mb-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                          <a href={`/locations/${stateSlug}/${county.slug}`} className="text-primary-600 hover:text-primary-500">
                            {county.name}
                          </a>
                        </h4>
                        <ul className="pl-6 grid gap-2">
                          {county.cities.map((city) => (
                            <li key={city.slug}>
                              <a
                                href={`/locations/${stateSlug}/${county.slug}/${city.slug}`}
                                className="text-primary-600 hover:text-primary-500"
                              >
                                {city.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Legal Pages</h2>
              <ul className="grid gap-3">
                <li><a href="/terms" className="text-primary-600 hover:text-primary-500">Terms of Service</a></li>
                <li><a href="/privacy" className="text-primary-600 hover:text-primary-500">Privacy Policy</a></li>
                <li><a href="/sitemap" className="text-primary-600 hover:text-primary-500">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 