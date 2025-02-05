import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Sitemap | Workflow Champions',
  description: 'Complete sitemap of Workflow Champions website, listing all our pages and services.',
}

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-600 hover:text-blue-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-blue-600 hover:text-blue-800">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-600 hover:text-blue-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/locations#california" className="text-blue-600 hover:text-blue-800">
                  California
                </Link>
              </li>
              <li>
                <Link href="/locations#texas" className="text-blue-600 hover:text-blue-800">
                  Texas
                </Link>
              </li>
              <li>
                <Link href="/locations#florida" className="text-blue-600 hover:text-blue-800">
                  Florida
                </Link>
              </li>
              <li>
                <Link href="/locations#new-york" className="text-blue-600 hover:text-blue-800">
                  New York
                </Link>
              </li>
              <li>
                <Link href="/locations#arizona" className="text-blue-600 hover:text-blue-800">
                  Arizona
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-blue-600 hover:text-blue-800">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 