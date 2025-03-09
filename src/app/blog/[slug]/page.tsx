import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import client from '@/lib/wordpress';
import { gql } from '@apollo/client/core';
import BlogPostContent from './BlogPostContent';

const GET_POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      excerpt
      slug
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

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  try {
    const { data } = await client.query({
      query: GET_POST,
      variables: { slug: params.slug }
    });

    if (!data.post) return notFound();

    const canonicalUrl = `https://workflowchampions.com/blog/${params.slug}`;

    return {
      title: `${data.post.title} | Workflow Champions Blog`,
      description: data.post.excerpt.replace(/<[^>]*>/g, ''),
      openGraph: {
        title: data.post.title,
        description: data.post.excerpt.replace(/<[^>]*>/g, ''),
        url: canonicalUrl,
        images: data.post.featuredImage ? [
          {
            url: data.post.featuredImage.node.sourceUrl,
            width: 1200,
            height: 630,
            alt: data.post.featuredImage.node.altText,
          },
        ] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: data.post.title,
        description: data.post.excerpt.replace(/<[^>]*>/g, ''),
        images: data.post.featuredImage ? [data.post.featuredImage.node.sourceUrl] : undefined,
      },
      alternates: {
        canonical: canonicalUrl
      }
    };
  } catch (error) {
    return notFound();
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  try {
    const { data } = await client.query({
      query: GET_POST,
      variables: { slug: params.slug }
    });

    if (!data.post) return notFound();

    return <BlogPostContent post={data.post} />;
  } catch (error) {
    return notFound();
  }
} 