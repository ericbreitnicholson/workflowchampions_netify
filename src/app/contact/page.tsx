import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Workflow Champions - Get Your SEO Strategy',
  description: 'Contact Workflow Champions for expert real estate SEO services. Schedule a free consultation and learn how we can help you dominate your local market.',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://workflowchampions.com/contact'
  }
}

export default function Contact() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://workflowchampions.com/contact#webpage',
    'url': 'https://workflowchampions.com/contact',
    'name': metadata.title,
    'description': metadata.description,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'mainEntity': {
      '@type': 'ContactPage',
      'name': 'Contact Workflow Champions',
      'description': metadata.description,
      'provider': {
        '@type': 'Organization',
        'name': 'Workflow Champions',
        'url': 'https://workflowchampions.com'
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://workflowchampions.com/contact#webpage'
      },
      'potentialAction': {
        '@type': 'ScheduleAction',
        'name': 'Schedule a Consultation',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://calendly.com/eric-workflowchampions/30min',
          'inLanguage': 'en-US',
          'actionPlatform': [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform'
          ]
        },
        'result': {
          '@type': 'Schedule',
          'scheduleType': 'booked_consultation'
        }
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
          __html: JSON.stringify(contactSchema)
        }}
      />
      <ContactForm />
    </>
  )
} 