'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import client from '@/lib/wordpress';
import { gql } from '@apollo/client/core';
import { format } from 'date-fns';
import parse from 'html-react-parser';
import Image from 'next/image';
import type { Metadata } from 'next';

const GET_POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      excerpt
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          id
          name
        }
      }
    }
  }
`;

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        setError(null);
        
        const { data } = await client.query({
          query: GET_POST,
          variables: { slug: params.slug },
          fetchPolicy: 'network-only'
        });

        if (data?.post) {
          setPost(data.post);
          // Update page title
          document.title = `${data.post.title} - Workflow Champions Blog`;
        } else {
          setError('Post not found');
        }
      } catch (error: any) {
        console.error('Error fetching post:', error);
        setError('Failed to load post. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navigation />
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <h2 className="font-bold mb-2">Error</h2>
            <p>{error || 'Post not found'}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navigation />
      <article className="mx-auto max-w-3xl px-6 py-24">
        {post.featuredImage && (
          <div className="relative w-full aspect-[16/9] mb-8">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
          {post.author?.node?.name && (
            <span>By {post.author.node.name}</span>
          )}
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
          {post.categories?.nodes?.length > 0 && (
            <div className="flex gap-2">
              {post.categories.nodes.map((category: any) => (
                <span
                  key={category.id}
                  className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          {parse(post.content)}
        </div>
      </article>
    </>
  );
} 