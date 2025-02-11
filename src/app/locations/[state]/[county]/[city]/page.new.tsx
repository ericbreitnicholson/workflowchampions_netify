import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'
import { stateData } from '../../page'

type CityParams = {
  state: string
  county: string
  city: string
}

// Function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export async function generateMetadata({ params }: { params: CityParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  const county = state.counties.find(c => c.slug === params.county)
  if (!county) return notFound()

  const cityData = county.cities.find(c => c.slug === params.city)
  if (!cityData) return notFound()

  const title = `${cityData.name} Real Estate SEO Services | Top-Rated Agency | Workflow Champions`
  const description = `Expert Real Estate SEO services in ${cityData.name}, ${county.name}. Dominate local searches with proven strategies. #1 rated agency for realtors and agents in ${cityData.name}. Free consultation.`
  const keywords = `${cityData.name.toLowerCase()} real estate seo, ${cityData.name.toLowerCase()} realtor marketing, ${cityData.name.toLowerCase()} real estate agent seo, local seo ${cityData.name.toLowerCase()}, ${state.name.toLowerCase()} real estate marketing, seo services ${cityData.name.toLowerCase()}, best seo company in ${cityData.name.toLowerCase()}`
  const canonicalUrl = `https://workflowchampions.com/locations/${params.state}/${params.county}/${params.city}`

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
          url: cityData.image || county.image || state.image,
          width: 1200,
          height: 630,
          alt: `${cityData.name} Real Estate Market - Workflow Champions SEO Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [cityData.image || county.image || state.image],
    },
    alternates: {
      canonical: canonicalUrl
    }
  }
}

export default function CityPage({ params }: { params: CityParams }) {
  // ... rest of the component implementation ...
} 