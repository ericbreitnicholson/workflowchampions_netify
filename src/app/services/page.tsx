import { Metadata } from 'next'
import ServicesContent from '@/components/ServicesContent'

export const metadata: Metadata = {
  title: 'Real Estate SEO Services - Workflow Champions',
  description: 'Explore our comprehensive real estate SEO services. From local SEO to content optimization, we help agents and realtors dominate their markets.',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://workflowchampions.com/services'
  }
}

export default function Services() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://workflowchampions.com/services#webpage',
    'url': 'https://workflowchampions.com/services',
    'name': metadata.title,
    'description': metadata.description,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
      'width': 1080,
      'height': 720
    },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'Service',
          'name': 'AI-Powered Search Dominance',
          'description': 'Stay ahead of your competition by dominating both traditional search results and emerging AI platforms.',
          'provider': {
            '@type': 'OnlineBusiness',
            '@id': 'https://workflowchampions.com/#organization',
            'name': 'Workflow Champions',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '1758 North Rhodes Street Unit 337',
              'addressLocality': 'Arlington',
              'addressRegion': 'VA',
              'postalCode': '22201',
              'addressCountry': 'US'
            }
          },
          'serviceType': 'Real Estate SEO',
          'offers': {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Comprehensive SEO Audit',
              'description': 'Get a detailed analysis of your website\'s SEO performance and discover untapped opportunities for growth in your local real estate market.',
              'offers': {
                '@type': 'Offer',
                'price': '50',
                'priceCurrency': 'USD'
              }
            }
          }
        },
        {
          '@type': 'Service',
          'name': 'Local Market Domination',
          'description': 'Own your local market and become the go-to agent in your area.',
          'provider': {
            '@type': 'OnlineBusiness',
            '@id': 'https://workflowchampions.com/#organization',
            'name': 'Workflow Champions',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': '1758 North Rhodes Street Unit 337',
              'addressLocality': 'Arlington',
              'addressRegion': 'VA',
              'postalCode': '22201',
              'addressCountry': 'US'
            }
          },
          'serviceType': 'Local SEO',
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Local SEO Services',
            'itemListElement': [
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Dominate Local Search Results',
                  'description': 'Be the first agent prospects see when searching in your area.'
                }
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Build Trust Through Reviews',
                  'description': 'Leverage your past successes to automatically attract new clients.'
                }
              }
            ]
          }
        }
      ]
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
          __html: JSON.stringify(servicesSchema)
        }}
      />
      <ServicesContent />
    </>
  )
} 