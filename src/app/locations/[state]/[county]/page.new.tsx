import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'
import { stateData } from '../page'

type CountyParams = {
  state: string
  county: string
}

export async function generateMetadata({ params }: { params: CountyParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const countyData = state.counties.find(c => c.slug === params.county)
  if (!countyData) return notFound()

  const title = `${countyData.name} County Real Estate SEO Services | Workflow Champions`
  const description = `Expert Real Estate SEO services in ${countyData.name} County, ${state.name}. Dominate local searches with proven strategies. #1 rated agency for realtors and agents. Free consultation.`
  const keywords = `${countyData.name.toLowerCase()} county real estate seo, ${countyData.name.toLowerCase()} county realtor marketing, ${state.name.toLowerCase()} real estate seo, local seo ${countyData.name.toLowerCase()}, real estate marketing ${state.name.toLowerCase()}`
  const canonicalUrl = `https://workflowchampions.com/locations/${params.state}/${params.county}`

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
          url: countyData.image || state.image,
          width: 1200,
          height: 630,
          alt: `${countyData.name} County Real Estate Market - Workflow Champions SEO Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [countyData.image || state.image],
    },
    alternates: {
      canonical: canonicalUrl
    }
  }
}

export default function CountyPage({ params }: { params: CountyParams }) {
  // ... rest of the component implementation ...
} 