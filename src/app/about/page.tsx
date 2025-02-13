import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Workflow Champions - Real Estate SEO Experts',
  description: 'Learn about Workflow Champions, your trusted partner in real estate SEO. We help agents and realtors dominate their local markets with proven strategies.',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://workflowchampions.com/about'
  }
}

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://workflowchampions.com/about#webpage',
    'url': 'https://workflowchampions.com/about',
    'name': metadata.title,
    'description': metadata.description,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      'width': 1200,
      'height': 800
    },
    'about': {
      '@type': 'OnlineBusiness',
      '@id': 'https://workflowchampions.com/#organization',
      'name': 'Workflow Champions',
      'description': 'Leading Real Estate SEO agency helping agents dominate local search rankings',
      'url': 'https://workflowchampions.com',
      'foundingDate': '2024-01-01',
      'knowsAbout': [
        'Real Estate SEO',
        'Local Search Optimization',
        'Digital Marketing for Realtors',
        'AI Search Optimization',
        'Schema Markup Implementation'
      ],
      'areaServed': {
        '@type': 'Country',
        'name': 'United States'
      },
      'award': [
        {
          '@type': 'Award',
          'name': 'Top Real Estate SEO Agency 2024',
          'description': 'Recognized for excellence in real estate digital marketing'
        }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Real Estate SEO Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Local SEO for Real Estate',
              'description': 'Comprehensive local SEO services for real estate professionals'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'AI Search Optimization',
              'description': 'Advanced AI-powered SEO strategies for modern search'
            }
          }
        ]
      }
    },
    'mainEntity': {
      '@type': 'AboutPage',
      'name': 'About Workflow Champions',
      'description': metadata.description,
      'mainContentOfPage': {
        '@type': 'WebPageElement',
        'isPartOf': {
          '@id': 'https://workflowchampions.com/about#webpage'
        },
        'significantLink': [
          {
            '@type': 'SiteNavigationElement',
            'name': 'Our Story',
            'description': 'Founded in 2024, we emerged from a simple yet powerful observation: talented independent real estate agents were being overshadowed online by large brokerages with deep pockets.'
          },
          {
            '@type': 'SiteNavigationElement',
            'name': 'What Sets Us Apart',
            'description': 'We specialize exclusively in real estate SEO, with a unique focus on preparing your online presence for the AI search revolution.'
          },
          {
            '@type': 'SiteNavigationElement',
            'name': 'Our Approach',
            'description': 'We translate your real-world expertise into digital authority through strategic optimization and advanced techniques.'
          }
        ]
      }
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.hero-text']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema)
        }}
      />
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              At Workflow Champions, we're on a mission to revolutionize how independent real estate agents compete in the digital landscape. We believe that exceptional local expertise should shine through in search results, regardless of marketing budget size.
            </p>
            <div className="mt-10 flex">
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary"
              >
                Transform Your Online Presence
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 2024, we emerged from a simple yet powerful observation: talented independent real estate agents were being overshadowed online by large brokerages with deep pockets. We set out to change that by mastering both traditional SEO and emerging AI search technologies.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Digital marketing strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="https://calendly.com/eric-workflowchampions/30min"
            className="btn-primary"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="AI and technology"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Sets Us Apart</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We specialize exclusively in real estate SEO, with a unique focus on preparing your online presence for the AI search revolution. While others are still catching up, we're already optimizing for platforms like SearchGPT, Perplexity, and OpenAI Operator, ensuring our clients stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="https://calendly.com/eric-workflowchampions/30min"
            className="btn-primary"
          >
            Learn About Our Approach
          </Link>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Approach</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We translate your real-world expertise into digital authority through:
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Strategic Google Business Profile optimization',
                'Local citation building',
                'Targeted backlink acquisition',
                'AI-optimized content creation',
                'Advanced schema markup implementation',
                'Comprehensive local SEO strategies'
              ].map((item, index) => (
                <li key={index} className="flex gap-x-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                    <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="text-base leading-7 text-gray-600">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="https://calendly.com/eric-workflowchampions/30min"
            className="btn-primary"
          >
            See How We Can Help
          </Link>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Proven Results</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our methods work. In just our first year, we helped a Midwest real estate agent achieve:
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  '#1 ranking for "real estate agent" in their downtown area',
                  'Dramatic increase in qualified leads',
                  'Growth that necessitated hiring additional team members to handle inquiries',
                  'Dominant local map pack presence'
                ].map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50">
                      <div className="h-2 w-2 rounded-full bg-primary-600"></div>
                    </div>
                    <span className="text-base leading-7 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Analytics and results"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="https://calendly.com/eric-workflowchampions/30min"
            className="btn-primary"
          >
            Get Similar Results
          </Link>
        </div>
      </div>

      {/* Promise and Mission Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Promise</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We back our expertise with a 90-day performance guarantee. While SEO is a long-term investment, we're committed to showing measurable progress within your first three months with us.
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-16">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mission is to empower real estate professionals—from independent agents to large brokerages—by delivering customized automation solutions that optimize workflows, strengthen client relationships, and accelerate growth. Leveraging cutting-edge technology and deep industry expertise, we enable our clients to provide exceptional service and confidently navigate the future of real estate.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="https://calendly.com/eric-workflowchampions/30min"
            className="btn-primary"
          >
            Experience Our Guarantee
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Level the Playing Field?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Contact us today to discover how we can help you establish your digital authority and compete effectively in your local market. We're here to ensure your expertise reaches the clients who need it most, whether they're searching on Google or asking AI for recommendations.
            </p>
            <div className="mt-10">
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary"
              >
                Schedule Your Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 