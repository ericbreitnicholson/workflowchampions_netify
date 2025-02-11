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
  return <ServicesContent />
} 