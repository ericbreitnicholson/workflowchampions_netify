import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
      }
    ]
  }
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

type ServiceParams = {
  slug: string
}

export async function generateMetadata({ params }: { params: ServiceParams }): Promise<Metadata> {
  const service = services.find(s => slugify(s.category) === params.slug);
  if (!service) return notFound();

  return {
    title: `${service.category} - Real Estate SEO Services | Workflow Champions`,
    description: service.description,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: `https://workflowchampions.com/services/${params.slug}`
    }
  }
}

export default function ServicePage({ params }: { params: ServiceParams }) {
  const service = services.find(s => slugify(s.category) === params.slug);
  if (!service) return notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://workflowchampions.com/services/${params.slug}#webpage`,
    'url': `https://workflowchampions.com/services/${params.slug}`,
    'name': `${service.category} - Real Estate SEO Services`,
    'description': service.description,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': service.image,
      'width': 1080,
      'height': 720
    },
    'mainEntity': {
      '@type': 'Service',
      'name': service.category,
      'description': service.description,
      'provider': {
        '@type': 'Organization',
        'name': 'Workflow Champions',
        'url': 'https://workflowchampions.com'
      },
      'image': {
        '@type': 'ImageObject',
        'url': service.image,
        'width': 1080,
        'height': 720
      },
      'offers': {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.category,
          'description': service.description
        }
      },
      'hasOfferCatalog': service.benefits ? {
        '@type': 'OfferCatalog',
        'name': `${service.category} Benefits`,
        'itemListElement': service.benefits.map(benefit => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': benefit
          }
        }))
      } : undefined
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.service-content']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Navigation />
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt={service.category}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center service-content">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
                {service.category}
              </h1>
              <p className="text-lg leading-8 mb-8 text-gray-200">
                {service.description}
              </p>
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      {service.benefits && (
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Key Benefits
              </h2>
              <div className="mt-10 space-y-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-x-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                      <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="text-base leading-7 text-gray-600">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Outcomes Section */}
      {service.outcomes && (
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Expected Outcomes
              </h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {service.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{outcome.name}</h3>
                    <p className="text-gray-600">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take the first step towards dominating your local real estate market with our proven SEO strategies.
            </p>
            <div className="mt-10">
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule Your Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 