import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Modern real estate building"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Background pattern */}
        <div className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Improve Your Real Estate SEO with Workflow Champions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Dominate local searches, attract quality leads, and grow your real estate business with our specialized SEO strategies. <span className="font-semibold text-primary-200">Our guarantee: if your rankings don't improve, you don't pay.</span>
            </p>
            <div className="mt-8 flex items-center justify-center">
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary"
              >
                Improve Your Rankings Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by institutions around the world
          </h2>
          <div className="mx-auto mt-16 max-w-lg grid grid-cols-2 items-center gap-x-12 gap-y-12 sm:max-w-xl lg:mx-0 lg:max-w-none">
            {/* RE/MAX logo */}
            <div className="flex justify-center">
              <Image
                src="/images/remax-balloon-logo.png?v=2"
                alt="RE/MAX"
                width={100}
                height={120}
                className="object-contain"
                priority
              />
            </div>
            {/* SEMrush logo */}
            <div className="flex justify-center">
              <Image
                src="/images/semrush-logo.png?v=2"
                alt="SEMrush"
                width={200}
                height={50}
                className="object-contain"
                priority
              />
            </div>
            {/* Make.com logo */}
            <div className="flex justify-center">
              <Image
                src="/images/make-logo.png?v=2"
                alt="Make.com"
                width={180}
                height={50}
                className="object-contain"
                priority
              />
            </div>
            {/* SOGO Homes logo */}
            <div className="flex justify-center">
              <Image
                src="/images/sogo-homes-logo.png?v=2"
                alt="SOGO Homes - Sell One, Give One"
                width={180}
                height={75}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <Link href="https://calendly.com/eric-workflowchampions/30min" className="btn-primary">
              Join Our Success Stories
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section with Images */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Grow Faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed online
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive real estate SEO services are designed to help you attract more qualified leads and grow your business.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="https://calendly.com/eric-workflowchampions/30min" className="btn-primary">
                Start Your Growth Journey
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="flex flex-col">
                  <dt className="relative flex flex-col">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden group">
                      <Image
                        src={benefit.image}
                        alt={benefit.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                      {/* Text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {benefit.name}
                        </h3>
                        <p className="text-sm text-gray-200 mb-4">
                          {benefit.description}
                        </p>
                        <Link 
                          href="https://calendly.com/eric-workflowchampions/30min" 
                          className="inline-flex items-center text-sm font-semibold text-primary-200 hover:text-primary-300"
                        >
                          Learn More <span aria-hidden="true" className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative isolate mt-16 px-6 py-24 sm:mt-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%-11rem,3.5rem)] aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-primary-300 to-primary-600" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to grow your real estate business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Get started today with our proven SEO strategies designed specifically for real estate professionals. Remember, if your rankings don't improve, you don't pay.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="https://calendly.com/eric-workflowchampions/30min" className="btn-primary">
              Start Your SEO Journey Today
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

const benefits = [
  {
    name: 'Local Search Dominance',
    description: 'Optimize your presence for "real estate agent near me" searches and capture more local leads.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Content That Converts',
    description: 'Create engaging, SEO-optimized content that attracts and converts potential clients.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Technical Excellence',
    description: 'Ensure your website performs at its best with our technical SEO expertise.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
] 