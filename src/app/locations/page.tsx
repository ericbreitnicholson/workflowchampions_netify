import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { stateData } from './[state]/page'

export const metadata: Metadata = {
  title: 'Local Real Estate SEO Services by City | Workflow Champions',
  description: 'Find expert real estate SEO services in your city. We help realtors and agents dominate local searches with proven strategies. Guaranteed results or you don\'t pay.',
  keywords: 'local real estate seo, real estate seo by city, realtor seo services, local seo services, real estate marketing',
  openGraph: {
    title: 'Local Real Estate SEO Services by City | Workflow Champions',
    description: 'Find expert real estate SEO services in your city. We help realtors and agents dominate local searches with proven strategies. Guaranteed results or you don\'t pay.',
    images: [
      {
        url: 'https://workflowchampions.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Real Estate SEO Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Real Estate SEO Services by City | Workflow Champions',
    description: 'Find expert real estate SEO services in your city. We help realtors and agents dominate local searches with proven strategies. Guaranteed results or you don\'t pay.',
    images: ['https://workflowchampions.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://workflowchampions.com/locations'
  }
}

export default function LocationsPage() {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Local real estate market"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Local Real Estate SEO Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Dominate real estate searches in your local market. Our city-specific SEO strategies help agents and realtors attract quality leads and grow their business. <span className="font-semibold text-primary-200">100% Satisfaction Guarantee: No Rankings, No Payment</span>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://calendly.com/eric-workflowchampions/30min"
                  className="btn-primary"
                >
                  Get Your Local SEO Strategy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Cities Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Cities by State
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our specialized SEO services across the United States
            </p>
          </div>

          {/* States 1-5 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Alabama</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/alabama/jefferson/birmingham" className="text-gray-600 hover:text-primary-600">Birmingham</Link></li>
                <li><Link href="/locations/alabama/madison/huntsville" className="text-gray-600 hover:text-primary-600">Huntsville</Link></li>
                <li><Link href="/locations/alabama/mobile/mobile" className="text-gray-600 hover:text-primary-600">Mobile</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Alaska</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/alaska/anchorage/anchorage" className="text-gray-600 hover:text-primary-600">Anchorage</Link></li>
                <li><Link href="/locations/alaska/fairbanks-north-star/fairbanks" className="text-gray-600 hover:text-primary-600">Fairbanks</Link></li>
                <li><Link href="/locations/alaska/juneau/juneau" className="text-gray-600 hover:text-primary-600">Juneau</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Arizona</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/arizona/maricopa/phoenix" className="text-gray-600 hover:text-primary-600">Phoenix</Link></li>
                <li><Link href="/locations/arizona/pima/tucson" className="text-gray-600 hover:text-primary-600">Tucson</Link></li>
                <li><Link href="/locations/arizona/yuma/yuma" className="text-gray-600 hover:text-primary-600">Yuma</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Arkansas</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/arkansas/pulaski/little-rock" className="text-gray-600 hover:text-primary-600">Little Rock</Link></li>
                <li><Link href="/locations/arkansas/benton/rogers" className="text-gray-600 hover:text-primary-600">Rogers</Link></li>
                <li><Link href="/locations/arkansas/washington/fayetteville" className="text-gray-600 hover:text-primary-600">Fayetteville</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">California</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/california/los-angeles/los-angeles" className="text-gray-600 hover:text-primary-600">Los Angeles</Link></li>
                <li><Link href="/locations/california/san-diego/san-diego" className="text-gray-600 hover:text-primary-600">San Diego</Link></li>
                <li><Link href="/locations/california/orange/anaheim" className="text-gray-600 hover:text-primary-600">Anaheim</Link></li>
              </ul>
            </div>
          </div>

          {/* States 6-10 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Colorado</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/colorado/denver/denver" className="text-gray-600 hover:text-primary-600">Denver</Link></li>
                <li><Link href="/locations/colorado/el-paso/colorado-springs" className="text-gray-600 hover:text-primary-600">Colorado Springs</Link></li>
                <li><Link href="/locations/colorado/arapahoe/aurora" className="text-gray-600 hover:text-primary-600">Aurora</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Connecticut</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/connecticut/hartford/hartford" className="text-gray-600 hover:text-primary-600">Hartford</Link></li>
                <li><Link href="/locations/connecticut/new-haven/new-haven" className="text-gray-600 hover:text-primary-600">New Haven</Link></li>
                <li><Link href="/locations/connecticut/fairfield/bridgeport" className="text-gray-600 hover:text-primary-600">Bridgeport</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Delaware</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/delaware/new-castle/wilmington" className="text-gray-600 hover:text-primary-600">Wilmington</Link></li>
                <li><Link href="/locations/delaware/kent/dover" className="text-gray-600 hover:text-primary-600">Dover</Link></li>
                <li><Link href="/locations/delaware/sussex/millsboro" className="text-gray-600 hover:text-primary-600">Millsboro</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Florida</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/florida/miami-dade/miami" className="text-gray-600 hover:text-primary-600">Miami</Link></li>
                <li><Link href="/locations/florida/orange/orlando" className="text-gray-600 hover:text-primary-600">Orlando</Link></li>
                <li><Link href="/locations/florida/hillsborough/tampa" className="text-gray-600 hover:text-primary-600">Tampa</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Georgia</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/georgia/fulton/atlanta" className="text-gray-600 hover:text-primary-600">Atlanta</Link></li>
                <li><Link href="/locations/georgia/chatham/savannah" className="text-gray-600 hover:text-primary-600">Savannah</Link></li>
                <li><Link href="/locations/georgia/cobb/marietta" className="text-gray-600 hover:text-primary-600">Marietta</Link></li>
              </ul>
            </div>
          </div>

          {/* States 11-15 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Hawaii</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/hawaii/honolulu/honolulu" className="text-gray-600 hover:text-primary-600">Honolulu</Link></li>
                <li><Link href="/locations/hawaii/kauai/kapaa" className="text-gray-600 hover:text-primary-600">Kapaa</Link></li>
                <li><Link href="/locations/hawaii/maui/kahului" className="text-gray-600 hover:text-primary-600">Kahului</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Idaho</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/idaho/ada/boise" className="text-gray-600 hover:text-primary-600">Boise</Link></li>
                <li><Link href="/locations/idaho/canyon/nampa" className="text-gray-600 hover:text-primary-600">Nampa</Link></li>
                <li><Link href="/locations/idaho/bonneville/idaho-falls" className="text-gray-600 hover:text-primary-600">Idaho Falls</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Illinois</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/illinois/cook/chicago" className="text-gray-600 hover:text-primary-600">Chicago</Link></li>
                <li><Link href="/locations/illinois/dupage/naperville" className="text-gray-600 hover:text-primary-600">Naperville</Link></li>
                <li><Link href="/locations/illinois/kane/aurora" className="text-gray-600 hover:text-primary-600">Aurora</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Indiana</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/indiana/marion/indianapolis" className="text-gray-600 hover:text-primary-600">Indianapolis</Link></li>
                <li><Link href="/locations/indiana/allen/fort-wayne" className="text-gray-600 hover:text-primary-600">Fort Wayne</Link></li>
                <li><Link href="/locations/indiana/hamilton/carmel" className="text-gray-600 hover:text-primary-600">Carmel</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Iowa</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/iowa/polk/des-moines" className="text-gray-600 hover:text-primary-600">Des Moines</Link></li>
                <li><Link href="/locations/iowa/linn/cedar-rapids" className="text-gray-600 hover:text-primary-600">Cedar Rapids</Link></li>
                <li><Link href="/locations/iowa/black-hawk/waterloo" className="text-gray-600 hover:text-primary-600">Waterloo</Link></li>
              </ul>
            </div>
          </div>

          {/* States 16-20 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Kansas</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/kansas/sedgwick/wichita" className="text-gray-600 hover:text-primary-600">Wichita</Link></li>
                <li><Link href="/locations/kansas/johnson/overland-park" className="text-gray-600 hover:text-primary-600">Overland Park</Link></li>
                <li><Link href="/locations/kansas/shawnee/topeka" className="text-gray-600 hover:text-primary-600">Topeka</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Kentucky</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/kentucky/jefferson/louisville" className="text-gray-600 hover:text-primary-600">Louisville</Link></li>
                <li><Link href="/locations/kentucky/fayette/lexington" className="text-gray-600 hover:text-primary-600">Lexington</Link></li>
                <li><Link href="/locations/kentucky/warren/bowling-green" className="text-gray-600 hover:text-primary-600">Bowling Green</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Louisiana</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/louisiana/orleans/new-orleans" className="text-gray-600 hover:text-primary-600">New Orleans</Link></li>
                <li><Link href="/locations/louisiana/east-baton-rouge/baton-rouge" className="text-gray-600 hover:text-primary-600">Baton Rouge</Link></li>
                <li><Link href="/locations/louisiana/caddo/shreveport" className="text-gray-600 hover:text-primary-600">Shreveport</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Maine</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/maine/cumberland/portland" className="text-gray-600 hover:text-primary-600">Portland</Link></li>
                <li><Link href="/locations/maine/androscoggin/lewiston" className="text-gray-600 hover:text-primary-600">Lewiston</Link></li>
                <li><Link href="/locations/maine/kennebec/waterville" className="text-gray-600 hover:text-primary-600">Waterville</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Maryland</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/maryland/baltimore/baltimore" className="text-gray-600 hover:text-primary-600">Baltimore</Link></li>
                <li><Link href="/locations/maryland/montgomery/silver-spring" className="text-gray-600 hover:text-primary-600">Silver Spring</Link></li>
                <li><Link href="/locations/maryland/prince-georges/hyattsville" className="text-gray-600 hover:text-primary-600">Hyattsville</Link></li>
              </ul>
            </div>
          </div>

          {/* States 21-25 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Massachusetts</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/massachusetts/suffolk/boston" className="text-gray-600 hover:text-primary-600">Boston</Link></li>
                <li><Link href="/locations/massachusetts/middlesex/cambridge" className="text-gray-600 hover:text-primary-600">Cambridge</Link></li>
                <li><Link href="/locations/massachusetts/worcester/worcester" className="text-gray-600 hover:text-primary-600">Worcester</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Michigan</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/michigan/wayne/detroit" className="text-gray-600 hover:text-primary-600">Detroit</Link></li>
                <li><Link href="/locations/michigan/kent/grand-rapids" className="text-gray-600 hover:text-primary-600">Grand Rapids</Link></li>
                <li><Link href="/locations/michigan/oakland/rochester" className="text-gray-600 hover:text-primary-600">Rochester</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Minnesota</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/minnesota/hennepin/minneapolis" className="text-gray-600 hover:text-primary-600">Minneapolis</Link></li>
                <li><Link href="/locations/minnesota/ramsey/saint-paul" className="text-gray-600 hover:text-primary-600">Saint Paul</Link></li>
                <li><Link href="/locations/minnesota/dakota/saint-paul" className="text-gray-600 hover:text-primary-600">Saint Paul</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Mississippi</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/mississippi/hinds/jackson" className="text-gray-600 hover:text-primary-600">Jackson</Link></li>
                <li><Link href="/locations/mississippi/harrison/gulfport" className="text-gray-600 hover:text-primary-600">Gulfport</Link></li>
                <li><Link href="/locations/mississippi/desoto/olive-branch" className="text-gray-600 hover:text-primary-600">Olive Branch</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Missouri</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/missouri/st-louis/saint-louis" className="text-gray-600 hover:text-primary-600">Saint Louis</Link></li>
                <li><Link href="/locations/missouri/jackson/kansas-city" className="text-gray-600 hover:text-primary-600">Kansas City</Link></li>
                <li><Link href="/locations/missouri/greene/springfield" className="text-gray-600 hover:text-primary-600">Springfield</Link></li>
              </ul>
            </div>
          </div>

          {/* States 26-30 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Montana</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/montana/yellowstone/billings" className="text-gray-600 hover:text-primary-600">Billings</Link></li>
                <li><Link href="/locations/montana/cascade/great-falls" className="text-gray-600 hover:text-primary-600">Great Falls</Link></li>
                <li><Link href="/locations/montana/gallatin/bozeman" className="text-gray-600 hover:text-primary-600">Bozeman</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Nebraska</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/nebraska/douglas/omaha" className="text-gray-600 hover:text-primary-600">Omaha</Link></li>
                <li><Link href="/locations/nebraska/lancaster/lincoln" className="text-gray-600 hover:text-primary-600">Lincoln</Link></li>
                <li><Link href="/locations/nebraska/sarpy/bellevue" className="text-gray-600 hover:text-primary-600">Bellevue</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Nevada</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/nevada/clark/las-vegas" className="text-gray-600 hover:text-primary-600">Las Vegas</Link></li>
                <li><Link href="/locations/nevada/washoe/reno" className="text-gray-600 hover:text-primary-600">Reno</Link></li>
                <li><Link href="/locations/nevada/carson-city/carson-city" className="text-gray-600 hover:text-primary-600">Carson City</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">New Hampshire</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/new-hampshire/hillsborough/manchester" className="text-gray-600 hover:text-primary-600">Manchester</Link></li>
                <li><Link href="/locations/new-hampshire/rockingham/derry" className="text-gray-600 hover:text-primary-600">Derry</Link></li>
                <li><Link href="/locations/new-hampshire/merrimack/concord" className="text-gray-600 hover:text-primary-600">Concord</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">New Jersey</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/new-jersey/hudson/jersey-city" className="text-gray-600 hover:text-primary-600">Jersey City</Link></li>
                <li><Link href="/locations/new-jersey/essex/newark" className="text-gray-600 hover:text-primary-600">Newark</Link></li>
                <li><Link href="/locations/new-jersey/middlesex/edison" className="text-gray-600 hover:text-primary-600">Edison</Link></li>
              </ul>
            </div>
          </div>

          {/* States 31-35 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">New Mexico</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/new-mexico/bernalillo/albuquerque" className="text-gray-600 hover:text-primary-600">Albuquerque</Link></li>
                <li><Link href="/locations/new-mexico/santa-fe/santa-fe" className="text-gray-600 hover:text-primary-600">Santa Fe</Link></li>
                <li><Link href="/locations/new-mexico/dona-ana/las-cruces" className="text-gray-600 hover:text-primary-600">Las Cruces</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">New York</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/new-york/new-york/new-york" className="text-gray-600 hover:text-primary-600">New York</Link></li>
                <li><Link href="/locations/new-york/kings/brooklyn" className="text-gray-600 hover:text-primary-600">Brooklyn</Link></li>
                <li><Link href="/locations/new-york/queens/jamaica" className="text-gray-600 hover:text-primary-600">Jamaica</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">North Carolina</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/north-carolina/mecklenburg/charlotte" className="text-gray-600 hover:text-primary-600">Charlotte</Link></li>
                <li><Link href="/locations/north-carolina/wake/raleigh" className="text-gray-600 hover:text-primary-600">Raleigh</Link></li>
                <li><Link href="/locations/north-carolina/guilford/greensboro" className="text-gray-600 hover:text-primary-600">Greensboro</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">North Dakota</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/north-dakota/cass/fargo" className="text-gray-600 hover:text-primary-600">Fargo</Link></li>
                <li><Link href="/locations/north-dakota/burleigh/bismarck" className="text-gray-600 hover:text-primary-600">Bismarck</Link></li>
                <li><Link href="/locations/north-dakota/grand-forks/grand-forks" className="text-gray-600 hover:text-primary-600">Grand Forks</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Ohio</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/ohio/franklin/columbus" className="text-gray-600 hover:text-primary-600">Columbus</Link></li>
                <li><Link href="/locations/ohio/cuyahoga/cleveland" className="text-gray-600 hover:text-primary-600">Cleveland</Link></li>
                <li><Link href="/locations/ohio/hamilton/cincinnati" className="text-gray-600 hover:text-primary-600">Cincinnati</Link></li>
              </ul>
            </div>
          </div>

          {/* States 36-40 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Oklahoma</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/oklahoma/oklahoma/oklahoma-city" className="text-gray-600 hover:text-primary-600">Oklahoma City</Link></li>
                <li><Link href="/locations/oklahoma/tulsa/tulsa" className="text-gray-600 hover:text-primary-600">Tulsa</Link></li>
                <li><Link href="/locations/oklahoma/cleveland/norman" className="text-gray-600 hover:text-primary-600">Norman</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Oregon</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/oregon/multnomah/portland" className="text-gray-600 hover:text-primary-600">Portland</Link></li>
                <li><Link href="/locations/oregon/marion/salem" className="text-gray-600 hover:text-primary-600">Salem</Link></li>
                <li><Link href="/locations/oregon/lane/eugene" className="text-gray-600 hover:text-primary-600">Eugene</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Pennsylvania</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/pennsylvania/philadelphia/philadelphia" className="text-gray-600 hover:text-primary-600">Philadelphia</Link></li>
                <li><Link href="/locations/pennsylvania/allegheny/pittsburgh" className="text-gray-600 hover:text-primary-600">Pittsburgh</Link></li>
                <li><Link href="/locations/pennsylvania/bucks/levittown" className="text-gray-600 hover:text-primary-600">Levittown</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Rhode Island</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/rhode-island/providence/providence" className="text-gray-600 hover:text-primary-600">Providence</Link></li>
                <li><Link href="/locations/rhode-island/kent/warwick" className="text-gray-600 hover:text-primary-600">Warwick</Link></li>
                <li><Link href="/locations/rhode-island/newport/newport" className="text-gray-600 hover:text-primary-600">Newport</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">South Carolina</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/south-carolina/richland/columbia" className="text-gray-600 hover:text-primary-600">Columbia</Link></li>
                <li><Link href="/locations/south-carolina/charleston/charleston" className="text-gray-600 hover:text-primary-600">Charleston</Link></li>
                <li><Link href="/locations/south-carolina/greenville/greenville" className="text-gray-600 hover:text-primary-600">Greenville</Link></li>
              </ul>
            </div>
          </div>

          {/* States 41-45 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">South Dakota</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/south-dakota/minnehaha/sioux-falls" className="text-gray-600 hover:text-primary-600">Sioux Falls</Link></li>
                <li><Link href="/locations/south-dakota/pennington/rapid-city" className="text-gray-600 hover:text-primary-600">Rapid City</Link></li>
                <li><Link href="/locations/south-dakota/brown/aberdeen" className="text-gray-600 hover:text-primary-600">Aberdeen</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Tennessee</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/tennessee/shelby/memphis" className="text-gray-600 hover:text-primary-600">Memphis</Link></li>
                <li><Link href="/locations/tennessee/davidson/nashville" className="text-gray-600 hover:text-primary-600">Nashville</Link></li>
                <li><Link href="/locations/tennessee/knox/knoxville" className="text-gray-600 hover:text-primary-600">Knoxville</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Texas</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/texas/harris/houston" className="text-gray-600 hover:text-primary-600">Houston</Link></li>
                <li><Link href="/locations/texas/dallas/dallas" className="text-gray-600 hover:text-primary-600">Dallas</Link></li>
                <li><Link href="/locations/texas/bexar/san-antonio" className="text-gray-600 hover:text-primary-600">San Antonio</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Utah</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/utah/salt-lake/salt-lake-city" className="text-gray-600 hover:text-primary-600">Salt Lake City</Link></li>
                <li><Link href="/locations/utah/utah/provo" className="text-gray-600 hover:text-primary-600">Provo</Link></li>
                <li><Link href="/locations/utah/weber/ogden" className="text-gray-600 hover:text-primary-600">Ogden</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Vermont</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/vermont/chittenden/burlington" className="text-gray-600 hover:text-primary-600">Burlington</Link></li>
                <li><Link href="/locations/vermont/washington/barre" className="text-gray-600 hover:text-primary-600">Barre</Link></li>
                <li><Link href="/locations/vermont/windsor/white-river-junction" className="text-gray-600 hover:text-primary-600">White River Junction</Link></li>
              </ul>
            </div>
          </div>

          {/* States 46-50 */}
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Virginia</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/virginia/virginia-beach/virginia-beach" className="text-gray-600 hover:text-primary-600">Virginia Beach</Link></li>
                <li><Link href="/locations/virginia/fairfax/alexandria" className="text-gray-600 hover:text-primary-600">Alexandria</Link></li>
                <li><Link href="/locations/virginia/henrico/henrico" className="text-gray-600 hover:text-primary-600">Henrico</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Washington</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/washington/king/seattle" className="text-gray-600 hover:text-primary-600">Seattle</Link></li>
                <li><Link href="/locations/washington/pierce/tacoma" className="text-gray-600 hover:text-primary-600">Tacoma</Link></li>
                <li><Link href="/locations/washington/spokane/spokane" className="text-gray-600 hover:text-primary-600">Spokane</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">West Virginia</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/west-virginia/kanawha/charleston" className="text-gray-600 hover:text-primary-600">Charleston</Link></li>
                <li><Link href="/locations/west-virginia/cabell/huntington" className="text-gray-600 hover:text-primary-600">Huntington</Link></li>
                <li><Link href="/locations/west-virginia/monongalia/morgantown" className="text-gray-600 hover:text-primary-600">Morgantown</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Wisconsin</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/wisconsin/milwaukee/milwaukee" className="text-gray-600 hover:text-primary-600">Milwaukee</Link></li>
                <li><Link href="/locations/wisconsin/dane/madison" className="text-gray-600 hover:text-primary-600">Madison</Link></li>
                <li><Link href="/locations/wisconsin/brown/green-bay" className="text-gray-600 hover:text-primary-600">Green Bay</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Wyoming</h3>
              <ul className="space-y-3">
                <li><Link href="/locations/wyoming/laramie/cheyenne" className="text-gray-600 hover:text-primary-600">Cheyenne</Link></li>
                <li><Link href="/locations/wyoming/natrona/casper" className="text-gray-600 hover:text-primary-600">Casper</Link></li>
                <li><Link href="/locations/wyoming/fremont/riverton" className="text-gray-600 hover:text-primary-600">Riverton</Link></li>
              </ul>
            </div>
          </div>

          {/* CTA 10 */}
          <div className="mt-16 text-center">
            <Link
              href="https://calendly.com/eric-workflowchampions/30min"
              className="btn-primary inline-block"
            >
              Start Your SEO Journey Today
            </Link>
          </div>

          {/* Territories and Districts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center mb-12">
              U.S. Territories and Districts
            </h2>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">District of Columbia</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/district-of-columbia/district-of-columbia/washington" className="text-gray-600 hover:text-primary-600">Washington</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Puerto Rico</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/puerto-rico/san-juan/san-juan" className="text-gray-600 hover:text-primary-600">San Juan</Link></li>
                  <li><Link href="/locations/puerto-rico/ponce/ponce" className="text-gray-600 hover:text-primary-600">Ponce</Link></li>
                  <li><Link href="/locations/puerto-rico/bayamon/bayamon" className="text-gray-600 hover:text-primary-600">Bayamon</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Guam</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/guam/guam/hagatna" className="text-gray-600 hover:text-primary-600">Hagatna</Link></li>
                  <li><Link href="/locations/guam/guam/barrigada" className="text-gray-600 hover:text-primary-600">Barrigada</Link></li>
                  <li><Link href="/locations/guam/guam/merizo" className="text-gray-600 hover:text-primary-600">Merizo</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">U.S. Virgin Islands</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/virgin-islands/st-thomas/st-thomas" className="text-gray-600 hover:text-primary-600">St. Thomas</Link></li>
                  <li><Link href="/locations/virgin-islands/st-croix/christiansted" className="text-gray-600 hover:text-primary-600">Christiansted</Link></li>
                  <li><Link href="/locations/virgin-islands/st-john/st-john" className="text-gray-600 hover:text-primary-600">St. John</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Northern Mariana Islands</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/northern-mariana-islands/saipan/saipan" className="text-gray-600 hover:text-primary-600">Saipan</Link></li>
                  <li><Link href="/locations/northern-mariana-islands/tinian/tinian" className="text-gray-600 hover:text-primary-600">Tinian</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">American Samoa</h3>
                <ul className="space-y-3">
                  <li><Link href="/locations/american-samoa/western/pago-pago" className="text-gray-600 hover:text-primary-600">Pago Pago</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Link
              href="https://calendly.com/eric-workflowchampions/30min"
              className="btn-primary inline-block"
            >
              Grow Your Real Estate Business Today
            </Link>
          </div>
        </div>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "OnlineBusiness",
            "@id": "https://workflowchampions.com/#organization",
            "name": "Workflow Champions",
            "description": "Expert Real Estate SEO services across the United States. Dominate local searches with proven strategies.",
            "url": "https://workflowchampions.com/locations",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1758 North Rhodes Street Unit 337",
              "addressLocality": "Arlington",
              "addressRegion": "VA",
              "postalCode": "22201",
              "addressCountry": "US"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "27"
            }
          })
        }}
      />
    </div>
  )
} 