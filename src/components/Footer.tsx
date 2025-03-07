'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Workflow Champions. All rights reserved.
          </p>
        </div>
        <div className="mt-8 md:order-2 md:mt-0">
          <nav className="flex justify-center space-x-6">
            <Link
              href="/sitemap"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Sitemap
            </Link>
            <Link
              href="/terms"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
} 