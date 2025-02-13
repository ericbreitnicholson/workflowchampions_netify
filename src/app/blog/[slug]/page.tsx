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
        const { data } = await client.query({
          query: GET_POST,
          variables: { slug: params.slug }
        });
        setPost(data.post);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog post');
        setLoading(false);
      }
    }
    fetchPost();
  }, [params.slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://workflowchampions.com/blog/${params.slug}#webpage`,
    'url': `https://workflowchampions.com/blog/${params.slug}`,
    'name': post.title,
    'description': post.excerpt,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'primaryImageOfPage': post.featuredImage ? {
      '@type': 'ImageObject',
      'url': post.featuredImage.node.sourceUrl,
      'altText': post.featuredImage.node.altText
    } : undefined,
    'mainEntity': {
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.excerpt,
      'articleBody': post.content.replace(/<[^>]*>/g, ''),
      'datePublished': post.date,
      'dateModified': post.date,
      'author': {
        '@type': 'Person',
        'name': post.author.node.name
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Workflow Champions',
        'url': 'https://workflowchampions.com'
      },
      'image': post.featuredImage ? {
        '@type': 'ImageObject',
        'url': post.featuredImage.node.sourceUrl,
        'altText': post.featuredImage.node.altText
      } : undefined,
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `https://workflowchampions.com/blog/${params.slug}#webpage`
      },
      'keywords': post.categories.nodes.map((cat: any) => cat.name).join(', ')
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.blog-post-content']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostSchema)
        }}
      />
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 py-8">
        {post.featuredImage && (
          <div className="relative w-full h-96 mb-8">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-8">
          <span>By {post.author.node.name}</span>
          <span className="mx-2">•</span>
          <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
        </div>
        <div className="prose max-w-none blog-post-content">
          {parse(post.content)}
        </div>
      </article>
    </>
  );
} 