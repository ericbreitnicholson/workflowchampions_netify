'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'
import client, { POSTS_QUERY, type WPPost } from '@/lib/wordpress'
import { format } from 'date-fns'
import parse from 'html-react-parser'

export default function BlogContent() {
  const [posts, setPosts] = useState<WPPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)
        const { data } = await client.query({
          query: POSTS_QUERY,
          variables: { first: 10 },
          fetchPolicy: 'network-only' // Force fetch from network
        })
        
        if (data?.posts?.nodes) {
          setPosts(data.posts.nodes)
        } else {
          setError('No posts found')
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        setError('Failed to load posts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Real Estate SEO Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert advice and strategies for dominating real estate search rankings.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {loading ? (
            <div className="animate-pulse space-y-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex flex-col space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 btn-primary"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
              {posts.map((post) => (
                <article key={post.id} className="flex flex-col items-start">
                  {post.featuredImage && (
                    <div className="relative w-full aspect-[16/9] mb-8">
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </time>
                    {post.categories?.nodes.map((category) => (
                      <span
                        key={category.id}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {parse(post.excerpt)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
} 