import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Script from 'next/script'
import Breadcrumb from '@/components/Breadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0ea5e9',
}

export const metadata: Metadata = {
  title: 'Workflow Champions | Premier Real Estate SEO & Digital Marketing Agency',
  description: 'Workflow Champions: Your trusted partner for real estate SEO excellence. Boost property listings, dominate local searches, and grow your real estate business with our proven strategies.',
  icons: {
    icon: [
      { url: '/images/logo.svg', type: 'image/svg+xml' },
      { url: '/images/logo.png', type: 'image/png' }
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  metadataBase: new URL('https://workflowchampions.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://workflowchampions.com/#website',
    'url': 'https://workflowchampions.com',
    'name': 'Workflow Champions',
    'description': 'Leading Real Estate SEO Agency',
    'publisher': {
      '@type': 'OnlineBusiness',
      '@id': 'https://workflowchampions.com/#organization',
      'name': 'Workflow Champions',
      'url': 'https://workflowchampions.com',
      'logo': {
        '@type': 'ImageObject',
        '@id': 'https://workflowchampions.com/#logo',
        'url': 'https://workflowchampions.com/images/logo.svg',
        'contentUrl': 'https://workflowchampions.com/images/logo.svg',
        'width': '32',
        'height': '32',
        'caption': 'Workflow Champions Logo'
      },
      'description': 'Leading Real Estate SEO Agency specializing in helping real estate professionals dominate their local markets',
      'sameAs': [
        'https://www.linkedin.com/company/workflow-champions',
        'https://twitter.com/workflowchamps',
        'https://www.facebook.com/workflowchampions'
      ],
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '1758 North Rhodes Street Unit 337',
        'addressLocality': 'Arlington',
        'addressRegion': 'VA',
        'postalCode': '22201',
        'addressCountry': 'US'
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'contactType': 'customer service',
          'email': 'support@workflowchampions.com',
          'url': 'https://workflowchampions.com/contact'
        },
        {
          '@type': 'ContactPoint',
          'contactType': 'sales',
          'email': 'sales@workflowchampions.com',
          'url': 'https://workflowchampions.com/contact'
        }
      ],
      'foundingDate': '2024-01-01',
      'areaServed': {
        '@type': 'Country',
        'name': 'United States'
      },
      'priceRange': '$$',
      'knowsAbout': [
        'Real Estate SEO',
        'Digital Marketing',
        'Local SEO',
        'Content Strategy',
        'Website Optimization'
      ],
      'award': [
        {
          '@type': 'Award',
          'name': 'Best Real Estate SEO Agency 2024',
          'description': 'Recognized for excellence in real estate digital marketing'
        }
      ]
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://workflowchampions.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(baseSchema)
          }}
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PPR48VWJ');`}
        </Script>
        {/* End Google Tag Manager */}
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KVX3X09SSY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KVX3X09SSY');
          `}
        </Script>
      </head>
      <body className={`${inter.className} h-full antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPR48VWJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <div className="flex min-h-full flex-col">
          <main className="flex-grow pt-16">
            <div className="container mx-auto px-4">
              <Breadcrumb />
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 