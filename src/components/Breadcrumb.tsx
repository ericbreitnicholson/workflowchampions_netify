'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '' }) => {
  const pathname = usePathname();
  
  // Skip rendering breadcrumbs on homepage
  if (pathname === '/') return null;

  const pathSegments = pathname
    .split('/')
    .filter(segment => segment !== '');

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const isLast = index === pathSegments.length - 1;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      href,
      label,
      isLast
    };
  });

  // Generate schema markup
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/#breadcrumb`,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/`,
          'name': 'Home'
        }
      },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 2,
        'item': {
          '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}${crumb.href}`,
          'name': crumb.label
        }
      }))
    ]
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
        <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {crumb.isLast ? (
                <span className="text-gray-800 font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-primary-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
    </>
  );
};

export default Breadcrumb; 