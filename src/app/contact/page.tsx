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
  return <ContactForm />
} 