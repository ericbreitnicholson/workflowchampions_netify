import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'
import { stateData } from '@/data/generatedLocations'

type StateParams = {
  state: string
}

export async function generateMetadata({ params }: { params: StateParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const title = `${state.name} Real Estate SEO Services | Workflow Champions`
  const description = `Expert Real Estate SEO services in ${state.name}. Dominate local searches with proven strategies. #1 rated agency for realtors and agents across ${state.name}. Free consultation.`
  const keywords = `${state.name.toLowerCase()} real estate seo, ${state.name.toLowerCase()} realtor marketing, real estate seo ${state.name.toLowerCase()}, local seo ${state.name.toLowerCase()}, real estate marketing ${state.name.toLowerCase()}`
  const canonicalUrl = `https://workflowchampions.com/locations/${params.state}`

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: state.image,
          width: 1200,
          height: 630,
          alt: `${state.name} Real Estate Market - Workflow Champions SEO Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [state.image],
    },
    alternates: {
      canonical: canonicalUrl
    }
  }
}

export default function StatePage({ params }: { params: StateParams }) {
  // ... rest of the component implementation ...
} 