'use client'

import Navigation from '@/components/Navigation'

// Define types for our location data structure
type Location = {
  city: string
  zipCodes: string[]
}

type State = {
  name: string
  locations: Location[]
}

type Country = {
  name: string
  states: State[]
}

// Sample location data - this could be moved to a separate data file
const locationData: Country[] = [
  {
    name: 'United States',
    states: [
      {
        name: 'California',
        locations: [
          {
            city: 'Los Angeles',
            zipCodes: ['90001', '90002', '90003', '90004', '90005']
          },
          {
            city: 'San Francisco',
            zipCodes: ['94102', '94103', '94104', '94105']
          }
        ]
      },
      {
        name: 'New York',
        locations: [
          {
            city: 'New York City',
            zipCodes: ['10001', '10002', '10003', '10004']
          },
          {
            city: 'Buffalo',
            zipCodes: ['14201', '14202', '14203']
          }
        ]
      }
    ]
  },
  {
    name: 'Canada',
    states: [
      {
        name: 'Ontario',
        locations: [
          {
            city: 'Toronto',
            zipCodes: ['M5V', 'M5H', 'M5G']
          },
          {
            city: 'Ottawa',
            zipCodes: ['K1P', 'K1Y', 'K1S']
          }
        ]
      },
      {
        name: 'British Columbia',
        locations: [
          {
            city: 'Vancouver',
            zipCodes: ['V5K', 'V5L', 'V5M']
          },
          {
            city: 'Victoria',
            zipCodes: ['V8V', 'V8W', 'V8X']
          }
        ]
      }
    ]
  }
]

export default function LocationsContent() {
  return (
    <>
      <Navigation />
      
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
              Our Service Locations
            </h1>

            <div className="space-y-16">
              {locationData.map((country) => (
                <div key={country.name} className="space-y-8">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    {country.name}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {country.states.map((state) => (
                      <div key={state.name} className="space-y-4">
                        <h3 className="text-xl font-medium text-gray-900">
                          {state.name}
                        </h3>
                        
                        <div className="space-y-6">
                          {state.locations.map((location) => (
                            <div key={location.city} className="space-y-2">
                              <h4 className="text-lg font-medium text-gray-800">
                                {location.city}
                              </h4>
                              
                              <div className="flex flex-wrap gap-2">
                                {location.zipCodes.map((zipCode) => (
                                  <span
                                    key={zipCode}
                                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
                                  >
                                    {zipCode}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 