'use client'

import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface Outcome {
  name: string;
  description: string;
}

interface Service {
  category: string;
  description: string;
  image: string;
  benefits?: string[];
  outcomes?: Outcome[];
}

const services: Service[] = [
  {
    category: "AI-Powered Search Dominance",
    description: "Stay ahead of your competition by dominating both traditional search results and emerging AI platforms. While other agents struggle to adapt, you'll be perfectly positioned for the future of search.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    benefits: [
      "Get discovered by potential clients using AI tools like ChatGPT and Perplexity",
      "Capture leads 24/7 with content that answers exactly what buyers are asking",
      "Build authority in your market as the go-to real estate expert",
      "Convert more visitors into leads with AI-optimized landing pages",
      "Stay ahead of market trends with predictive content strategies"
    ]
  },
  {
    category: "Local Market Domination",
    description: "Own your local market and become the go-to agent in your area. When potential clients search for real estate services, your name will be front and center.",
    image: "https://images.unsplash.com/photo-1447758902204-48010b87c24d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    outcomes: [
      {
        name: "Dominate Local Search Results",
        description: "Be the first agent prospects see when searching in your area, capturing high-intent leads before your competition."
      },
      {
        name: "Build Trust Through Reviews",
        description: "Leverage your past successes to automatically attract new clients through a steady stream of positive reviews."
      },
      {
        name: "Neighborhood Authority",
        description: "Become the recognized expert in your target neighborhoods, attracting clients who value local expertise."
      },
      {
        name: "Own the Google Map Pack",
        description: "Appear in the coveted map results where motivated buyers and sellers are most likely to click."
      },
      {
        name: "Visual Storytelling",
        description: "Stand out with optimized imagery that showcases your properties and expertise to their full potential."
      },
      {
        name: "Community Leadership",
        description: "Position yourself as a community leader through strategic local partnerships and content."
      }
    ]
  }
]

export default function ServicesContent() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-white pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Dominate Your Local Real Estate Market
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Stop losing leads to big brokerages. Our proven SEO strategies help independent agents compete and win against bigger competitors with deeper pockets.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary"
              >
                Get Your Custom SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Audit Product Section */}
      <div className="bg-white pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl border-2 border-primary-200 bg-white shadow-lg">
            <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-primary-500 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
              $50 Value
            </div>
            
            <div className="p-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Comprehensive SEO Audit
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Get a detailed analysis of your website's SEO performance and discover untapped opportunities for growth in your local real estate market.
                  </p>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Technical SEO Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Keyword Research & Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Competitor Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Content Gap Analysis</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Local SEO Performance Review</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Site Speed & Performance Check</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Mobile Optimization Assessment</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600 mt-1" aria-hidden="true" />
                        <span className="text-gray-600">Backlink Profile Analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="https://calendly.com/eric-workflowchampions/30min"
                      className="btn-primary"
                    >
                      Get Your SEO Audit
                    </Link>
                  </div>
                </div>

                <div className="mt-8 lg:mt-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="SEO Analytics Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {services.map((service, serviceIdx) => (
            <div key={service.category} className={`${serviceIdx > 0 ? 'mt-32' : ''}`}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                <div className="lg:order-2">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.category}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:order-1">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    {service.category}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {service.description}
                  </p>
                  
                  {'benefits' in service && service.benefits && (
                    <ul role="list" className="mt-8 space-y-4">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-x-3">
                          <ChevronRightIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {'outcomes' in service && service.outcomes && (
                    <>
                      <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        {service.outcomes.slice(0, 2).map((outcome) => (
                          <div key={outcome.name} className="relative rounded-lg border border-gray-200 p-6 hover:border-primary-200 transition-colors">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">
                              {outcome.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                              {outcome.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Mid-section Image and CTA */}
                      <div className="mt-12 mb-12">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                            Ready to Transform Your Local Presence?
                          </h3>
                          <Link
                            href="https://calendly.com/eric-workflowchampions/30min"
                            className="btn-primary inline-block"
                          >
                            Get Started Today
                          </Link>
                        </div>
                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                          <Image
                            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80"
                            alt="Digital Marketing Analytics"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        {service.outcomes.slice(2, 6).map((outcome) => (
                          <div key={outcome.name} className="relative rounded-lg border border-gray-200 p-6 hover:border-primary-200 transition-colors">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">
                              {outcome.name}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600">
                              {outcome.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="mt-8 text-center">
                    <Link
                      href="https://calendly.com/eric-workflowchampions/30min"
                      className="btn-primary"
                    >
                      Start Your Journey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Level the Playing Field?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join the growing number of independent agents who are outranking major brokerages in their local markets. Remember, if your rankings don't improve, you don't pay.
            </p>
            <div className="mt-10">
              <Link href="https://calendly.com/eric-workflowchampions/30min" className="btn-primary">
                Schedule Your Strategy Call
              </Link>
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
            "@type": "Service",
            "name": "Real Estate SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "Workflow Champions"
            },
            "serviceType": "Search Engine Optimization",
            "areaServed": "United States",
            "description": "Comprehensive SEO solutions designed specifically for real estate professionals.",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Real Estate SEO Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.category,
                  "description": service.description
                },
                "position": index + 1
              }))
            }
          })
        }}
      />
    </>
  )
} 