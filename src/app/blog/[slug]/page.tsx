import { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  return {
    title: `Blog Post - ${params.slug}`,
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <>
      <Navigation />
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-2xl font-bold">Blog Post: {params.slug}</h1>
      </div>
    </>
  )
} 