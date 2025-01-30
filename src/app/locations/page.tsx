import { Metadata } from 'next'
import LocationsContent from '@/components/LocationsContent'

export const metadata: Metadata = {
  title: 'Service Locations | Workflow Champions',
  description: 'Find Workflow Champions service locations across the United States and Canada. We provide digital marketing and SEO services in major cities.',
}

export default function Page() {
  return <LocationsContent />
} 