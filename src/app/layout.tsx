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
  title: 'Best Real Estate SEO Services in the USA | Workflow Champions',
  description: 'Leading Real Estate SEO agency helping agents dominate local search rankings. Our proven SEO strategies help realtors attract more leads and outrank competitors. Specialized in real estate digital marketing.',
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
    '@type': 'WebPage',
    '@id': 'https://workflowchampions.com/#webpage',
    'url': 'https://workflowchampions.com',
    'name': metadata.title,
    'description': metadata.description,
    'inLanguage': 'en-US',
    'isPartOf': {
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
          'url': 'https://workflowchampions.com/logo.png',
          'contentUrl': 'https://workflowchampions.com/logo.png',
          'width': '512',
          'height': '512'
        },
        'description': 'Leading Real Estate SEO Agency specializing in helping real estate professionals dominate their local markets',
        'sameAs': [
          'https://www.linkedin.com/company/workflow-champions',
          'https://twitter.com/workflowchamps',
          'https://www.facebook.com/workflowchampions'
        ],
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'US',
          'addressRegion': 'CA'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'customer service',
          'email': 'support@workflowchampions.com',
          'url': 'https://workflowchampions.com/contact'
        },
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
        ]
      }
    },
    'datePublished': '2024-01-01T00:00:00+00:00',
    'dateModified': new Date().toISOString(),
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/#breadcrumb`
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