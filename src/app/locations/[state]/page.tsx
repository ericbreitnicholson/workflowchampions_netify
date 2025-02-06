import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'

// Define types for our data structure
export type MarketStat = {
  label: string
  value: string
  description: string
}

export type Neighborhood = {
  name: string
  description: string
  features: string[]
}

export type SeoStrategy = {
  title: string
  description: string
}

export type City = {
  name: string
  slug: string
  description: string
  image?: string
  marketStats: MarketStat[]
  neighborhoods: Neighborhood[]
  seoStrategies: SeoStrategy[]
}

export type County = {
  name: string
  slug: string
  description: string
  image?: string
  cities: City[]
}

export type State = {
  name: string
  description: string
  image: string
  counties: County[]
}

export type StateData = {
  [key: string]: State
}

// Define state data with counties
export const stateData: StateData = {
  california: {
    name: "California",
    description: "Helping real estate agents dominate search results across the Golden State, from San Francisco to Los Angeles.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Los Angeles County",
        slug: "los-angeles",
        description: "Home to Hollywood and diverse urban communities.",
        image: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cities: [
          {
            name: "Los Angeles",
            slug: "los-angeles",
            description: "The entertainment capital with diverse real estate opportunities.",
            image: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$950,000",
                description: "Median home value in Los Angeles"
              },
              {
                label: "Market Growth",
                value: "12%",
                description: "Year-over-year market appreciation"
              },
              {
                label: "Days on Market",
                value: "45",
                description: "Average days to sell a property"
              }
            ],
            neighborhoods: [
              {
                name: "Beverly Hills",
                description: "Luxury estates and high-end properties",
                features: ["Luxury Homes", "Celebrity Neighbors", "Exclusive Schools"]
              },
              {
                name: "Santa Monica",
                description: "Beachfront living and urban convenience",
                features: ["Ocean Views", "Shopping", "Tech Hub"]
              }
            ],
            seoStrategies: [
              {
                title: "Local Search Optimization",
                description: "Target high-intent buyers in Los Angeles"
              },
              {
                title: "Neighborhood Expertise",
                description: "Showcase your knowledge of local areas"
              }
            ]
          },
          {
            name: "Beverly Hills",
            slug: "beverly-hills",
            description: "Luxury real estate and exclusive properties.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$3.5M",
                description: "Median home value in Beverly Hills"
              }
            ],
            neighborhoods: [
              {
                name: "Golden Triangle",
                description: "Prime retail and residential area",
                features: ["Luxury Shopping", "Fine Dining", "Walk Score 95"]
              }
            ],
            seoStrategies: [
              {
                title: "Luxury Market Focus",
                description: "Target high-net-worth buyers"
              }
            ]
          },
          {
            name: "Santa Monica",
            slug: "santa-monica",
            description: "Coastal living with a perfect blend of urban amenities and beach lifestyle.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$2.1M",
                description: "Based on recent market data"
              },
              {
                label: "Monthly Searches",
                value: "75,000+",
                description: "People searching for Santa Monica real estate"
              },
              {
                label: "Market Growth",
                value: "10%",
                description: "Year over year appreciation"
              }
            ],
            neighborhoods: [
              {
                name: "Ocean Park",
                description: "Vibrant beachside community",
                features: ["Beach Access", "Art Galleries", "Cafes"]
              },
              {
                name: "Montana Avenue",
                description: "Upscale shopping and dining district",
                features: ["Boutiques", "Fine Dining", "Walkability"]
              }
            ],
            seoStrategies: [
              {
                title: "Lifestyle Content",
                description: "Highlight beach living benefits"
              },
              {
                title: "Local Business",
                description: "Feature neighborhood attractions"
              },
              {
                title: "Market Reports",
                description: "Regular updates on property values"
              }
            ]
          },
          {
            name: "Pasadena",
            slug: "pasadena",
            description: "Historic charm meets modern luxury in this cultural hub.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$1.2M",
                description: "Based on recent market data"
              },
              {
                label: "Monthly Searches",
                value: "45,000+",
                description: "People searching for Pasadena real estate"
              },
              {
                label: "Market Growth",
                value: "8%",
                description: "Year over year appreciation"
              }
            ],
            neighborhoods: [
              {
                name: "Old Pasadena",
                description: "Historic district with shopping and dining",
                features: ["Historic Architecture", "Shopping", "Nightlife"]
              },
              {
                name: "San Rafael",
                description: "Prestigious residential area",
                features: ["Large Estates", "Tree-lined Streets", "Views"]
              }
            ],
            seoStrategies: [
              {
                title: "Heritage Focus",
                description: "Highlight historic properties"
              },
              {
                title: "Cultural Content",
                description: "Feature local attractions"
              },
              {
                title: "Education Focus",
                description: "Emphasize school districts"
              }
            ]
          },
          {
            name: "Long Beach",
            slug: "long-beach",
            description: "Maritime charm with diverse neighborhoods and waterfront properties.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$850,000",
                description: "Based on recent market data"
              },
              {
                label: "Monthly Searches",
                value: "60,000+",
                description: "People searching for Long Beach real estate"
              },
              {
                label: "Market Growth",
                value: "9%",
                description: "Year over year appreciation"
              }
            ],
            neighborhoods: [
              {
                name: "Belmont Shore",
                description: "Popular beachfront community",
                features: ["Beach Living", "Shopping", "Restaurants"]
              },
              {
                name: "Naples",
                description: "Exclusive island community",
                features: ["Waterfront Homes", "Canals", "Luxury Living"]
              }
            ],
            seoStrategies: [
              {
                title: "Waterfront Focus",
                description: "Highlight marina and beach properties"
              },
              {
                title: "Community Content",
                description: "Showcase neighborhood diversity"
              },
              {
                title: "Investment Angle",
                description: "Target property investors"
              }
            ]
          }
        ]
      },
      {
        name: "Orange County",
        slug: "orange",
        description: "Luxury real estate and beautiful coastal properties.",
        image: "https://images.unsplash.com/photo-1564428436829-72ce79550378?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cities: [
          {
            name: "Newport Beach",
            slug: "newport-beach",
            description: "Coastal luxury living at its finest.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$2.8M",
                description: "Median home value in Newport Beach"
              }
            ],
            neighborhoods: [
              {
                name: "Corona del Mar",
                description: "Exclusive beachfront community",
                features: ["Ocean Views", "Private Beaches", "Luxury Homes"]
              }
            ],
            seoStrategies: [
              {
                title: "Coastal Property Focus",
                description: "Target luxury waterfront buyers"
              }
            ]
          }
        ]
      },
      {
        name: "San Diego County",
        slug: "san-diego",
        description: "Beautiful coastal communities and year-round perfect weather.",
        image: "https://images.unsplash.com/photo-1538397337446-3440f4a6ed12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cities: [
          {
            name: "San Diego",
            slug: "san-diego",
            description: "Perfect year-round weather and beautiful beaches.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$825,000",
                description: "Median home value in San Diego"
              }
            ],
            neighborhoods: [
              {
                name: "La Jolla",
                description: "Upscale coastal community",
                features: ["Ocean Views", "Luxury Homes", "Fine Dining"]
              }
            ],
            seoStrategies: [
              {
                title: "Coastal Living Focus",
                description: "Target beach lifestyle seekers"
              }
            ]
          },
          {
            name: "La Jolla",
            slug: "la-jolla",
            description: "Exclusive coastal community with luxury properties.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$2.1M",
                description: "Median home value in La Jolla"
              }
            ],
            neighborhoods: [
              {
                name: "The Village",
                description: "Heart of La Jolla",
                features: ["Shopping", "Dining", "Beach Access"]
              }
            ],
            seoStrategies: [
              {
                title: "Luxury Market",
                description: "Target affluent buyers"
              }
            ]
          }
        ]
      },
      {
        name: "San Francisco County",
        slug: "san-francisco",
        description: "Tech hub with iconic architecture and vibrant neighborhoods.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cities: [
          {
            name: "San Francisco",
            slug: "san-francisco",
            description: "Innovation meets historic charm in this iconic city.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$1.3M",
                description: "Median home value in San Francisco"
              }
            ],
            neighborhoods: [
              {
                name: "Pacific Heights",
                description: "Prestigious neighborhood with stunning views",
                features: ["Bay Views", "Victorian Homes", "Luxury Living"]
              }
            ],
            seoStrategies: [
              {
                title: "Tech Buyer Focus",
                description: "Target tech industry professionals"
              }
            ]
          },
          {
            name: "South Beach",
            slug: "south-beach",
            description: "Modern urban living near the bay.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$1.1M",
                description: "Median home value in South Beach"
              }
            ],
            neighborhoods: [
              {
                name: "The Embarcadero",
                description: "Waterfront district",
                features: ["Bay Views", "Modern Condos", "Dining"]
              }
            ],
            seoStrategies: [
              {
                title: "Urban Living",
                description: "Target young professionals"
              }
            ]
          }
        ]
      },
      {
        name: "Santa Clara County",
        slug: "santa-clara",
        description: "Silicon Valley's heart of innovation and luxury real estate.",
        image: "https://images.unsplash.com/photo-1607750092050-2f5589d2f747?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cities: [
          {
            name: "San Jose",
            slug: "san-jose",
            description: "Heart of Silicon Valley technology and innovation.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$1.2M",
                description: "Median home value in San Jose"
              }
            ],
            neighborhoods: [
              {
                name: "Willow Glen",
                description: "Charming downtown area",
                features: ["Tree-lined Streets", "Shopping", "Dining"]
              }
            ],
            seoStrategies: [
              {
                title: "Tech Focus",
                description: "Target tech employees"
              }
            ]
          },
          {
            name: "Palo Alto",
            slug: "palo-alto",
            description: "Premier tech hub with excellent schools.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$3.2M",
                description: "Median home value in Palo Alto"
              }
            ],
            neighborhoods: [
              {
                name: "Old Palo Alto",
                description: "Historic prestigious neighborhood",
                features: ["Tree-lined Streets", "Historic Homes", "Top Schools"]
              }
            ],
            seoStrategies: [
              {
                title: "Education Focus",
                description: "Target families seeking top schools"
              }
            ]
          }
        ]
      }
    ]
  },
  texas: {
    name: "Texas",
    description: "Dominate the Lone Star State's growing real estate market.",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Harris County",
        slug: "harris",
        description: "Home to Houston and diverse suburban communities.",
        cities: [
          {
            name: "Houston",
            slug: "houston",
            description: "A diverse metropolis with strong economic growth.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$375,000",
                description: "Median home value in Houston"
              }
            ],
            neighborhoods: [
              {
                name: "The Heights",
                description: "Historic district with character",
                features: ["Historic Homes", "Shopping", "Dining"]
              }
            ],
            seoStrategies: [
              {
                title: "Local Market Focus",
                description: "Target growing neighborhoods"
              }
            ]
          }
        ]
      },
      {
        name: "Dallas County",
        slug: "dallas",
        description: "Dynamic urban and suburban properties.",
        cities: [
          {
            name: "Dallas",
            slug: "dallas",
            description: "Modern urban living in the heart of North Texas.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$400,000",
                description: "Median home value in Dallas"
              }
            ],
            neighborhoods: [
              {
                name: "Highland Park",
                description: "Prestigious neighborhood with luxury estates",
                features: ["Luxury Homes", "Top Schools", "Shopping"]
              }
            ],
            seoStrategies: [
              {
                title: "Urban Growth",
                description: "Target urban professionals"
              }
            ]
          }
        ]
      },
      {
        name: "Travis County",
        slug: "travis",
        description: "Austin's booming tech-driven market.",
        cities: [
          {
            name: "Austin",
            slug: "austin",
            description: "Tech hub with vibrant culture and strong market growth.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$550,000",
                description: "Median home value in Austin"
              }
            ],
            neighborhoods: [
              {
                name: "West Lake Hills",
                description: "Upscale suburb with hill country views",
                features: ["Lake Views", "Top Schools", "Luxury Homes"]
              }
            ],
            seoStrategies: [
              {
                title: "Tech Focus",
                description: "Target tech industry buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Bexar County",
        slug: "bexar",
        description: "Historic San Antonio and growing suburbs.",
        cities: [
          {
            name: "San Antonio",
            slug: "san-antonio",
            description: "Rich history meets modern growth.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$300,000",
                description: "Median home value in San Antonio"
              }
            ],
            neighborhoods: [
              {
                name: "Alamo Heights",
                description: "Prestigious area with historic charm",
                features: ["Historic Homes", "Shopping", "Dining"]
              }
            ],
            seoStrategies: [
              {
                title: "Historic Focus",
                description: "Target history lovers and investors"
              }
            ]
          }
        ]
      },
      {
        name: "Collin County",
        slug: "collin",
        description: "Rapidly growing north Dallas suburbs.",
        cities: [
          {
            name: "Plano",
            slug: "plano",
            description: "Corporate hub with excellent schools.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$450,000",
                description: "Median home value in Plano"
              }
            ],
            neighborhoods: [
              {
                name: "Legacy West",
                description: "Modern mixed-use development",
                features: ["Shopping", "Dining", "Corporate Offices"]
              }
            ],
            seoStrategies: [
              {
                title: "Corporate Focus",
                description: "Target corporate relocations"
              }
            ]
          }
        ]
      }
    ]
  },
  florida: {
    name: "Florida",
    description: "Capture the Sunshine State's booming real estate market.",
    image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Miami-Dade County",
        slug: "miami-dade",
        description: "Vibrant culture and luxury waterfront properties.",
        cities: [
          {
            name: "Miami",
            slug: "miami",
            description: "International hub with luxury real estate.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$525,000",
                description: "Median home value in Miami"
              }
            ],
            neighborhoods: [
              {
                name: "Brickell",
                description: "Financial district with luxury condos",
                features: ["Waterfront", "Nightlife", "Shopping"]
              }
            ],
            seoStrategies: [
              {
                title: "International Focus",
                description: "Target global investors"
              }
            ]
          }
        ]
      },
      {
        name: "Orange County",
        slug: "orange",
        description: "Luxury coastal living and family-friendly communities.",
        image: "https://images.unsplash.com/photo-1564428436829-72ce79550378?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        cities: [
          {
            name: "Orlando",
            slug: "orlando",
            description: "Entertainment hub with strong rental market.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$375,000",
                description: "Median home value in Orlando"
              }
            ],
            neighborhoods: [
              {
                name: "Winter Park",
                description: "Historic charm meets modern luxury",
                features: ["Shopping", "Parks", "Culture"]
              }
            ],
            seoStrategies: [
              {
                title: "Tourism Focus",
                description: "Target vacation home buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Palm Beach County",
        slug: "palm-beach",
        description: "Luxury estates and oceanfront properties.",
        cities: [
          {
            name: "Palm Beach",
            slug: "palm-beach",
            description: "Exclusive island living and luxury estates.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$2.5M",
                description: "Median home value in Palm Beach"
              }
            ],
            neighborhoods: [
              {
                name: "Worth Avenue",
                description: "World-famous shopping and luxury homes",
                features: ["Oceanfront", "Luxury Shopping", "Fine Dining"]
              }
            ],
            seoStrategies: [
              {
                title: "Luxury Market",
                description: "Target high-net-worth buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Hillsborough County",
        slug: "hillsborough",
        description: "Tampa Bay area's diverse market.",
        cities: [
          {
            name: "Tampa",
            slug: "tampa",
            description: "Growing coastal city with strong job market.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$400,000",
                description: "Median home value in Tampa"
              }
            ],
            neighborhoods: [
              {
                name: "Hyde Park",
                description: "Historic waterfront neighborhood",
                features: ["Waterfront", "Shopping", "Historic Homes"]
              }
            ],
            seoStrategies: [
              {
                title: "Growth Market",
                description: "Target young professionals"
              }
            ]
          }
        ]
      },
      {
        name: "Broward County",
        slug: "broward",
        description: "Coastal living and urban amenities.",
        cities: [
          {
            name: "Fort Lauderdale",
            slug: "fort-lauderdale",
            description: "Waterfront lifestyle and boating paradise.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$550,000",
                description: "Median home value in Fort Lauderdale"
              }
            ],
            neighborhoods: [
              {
                name: "Las Olas",
                description: "Waterfront entertainment district",
                features: ["Waterfront", "Shopping", "Nightlife"]
              }
            ],
            seoStrategies: [
              {
                title: "Lifestyle Focus",
                description: "Target waterfront lifestyle seekers"
              }
            ]
          }
        ]
      }
    ]
  },
  "new-york": {
    name: "New York",
    description: "Excel in the Empire State's competitive market.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "New York County",
        slug: "new-york",
        description: "Manhattan's prestigious real estate market.",
        cities: [
          {
            name: "Manhattan",
            slug: "manhattan",
            description: "The heart of New York City real estate.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$1.2M",
                description: "Median home value in Manhattan"
              }
            ],
            neighborhoods: [
              {
                name: "Upper East Side",
                description: "Classic New York luxury",
                features: ["Park Views", "Museums", "Shopping"]
              }
            ],
            seoStrategies: [
              {
                title: "Luxury Focus",
                description: "Target high-end buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Kings County",
        slug: "kings",
        description: "Brooklyn's diverse neighborhoods.",
        cities: [
          {
            name: "Brooklyn Heights",
            slug: "brooklyn-heights",
            description: "Historic waterfront neighborhood with Manhattan views.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$1.5M",
                description: "Median home value in Brooklyn Heights"
              }
            ],
            neighborhoods: [
              {
                name: "Brooklyn Heights Promenade",
                description: "Scenic waterfront area",
                features: ["Manhattan Views", "Historic Homes", "Parks"]
              }
            ],
            seoStrategies: [
              {
                title: "Historic Focus",
                description: "Target history and architecture lovers"
              }
            ]
          }
        ]
      },
      {
        name: "Queens County",
        slug: "queens",
        description: "NYC's most diverse borough.",
        cities: [
          {
            name: "Astoria",
            slug: "astoria",
            description: "Vibrant cultural hub with Manhattan views.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$750,000",
                description: "Median home value in Astoria"
              }
            ],
            neighborhoods: [
              {
                name: "Ditmars",
                description: "Family-friendly area with great dining",
                features: ["Restaurants", "Parks", "Transportation"]
              }
            ],
            seoStrategies: [
              {
                title: "Cultural Focus",
                description: "Target diverse buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Nassau County",
        slug: "nassau",
        description: "Long Island's prestigious suburbs.",
        cities: [
          {
            name: "Garden City",
            slug: "garden-city",
            description: "Upscale suburban living with excellent schools.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$900,000",
                description: "Median home value in Garden City"
              }
            ],
            neighborhoods: [
              {
                name: "Garden City Estates",
                description: "Prestigious area with large homes",
                features: ["Top Schools", "Parks", "Shopping"]
              }
            ],
            seoStrategies: [
              {
                title: "Family Focus",
                description: "Target families seeking top schools"
              }
            ]
          }
        ]
      },
      {
        name: "Westchester County",
        slug: "westchester",
        description: "Upscale suburban communities.",
        cities: [
          {
            name: "White Plains",
            slug: "white-plains",
            description: "Modern suburban city with urban amenities.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$700,000",
                description: "Median home value in White Plains"
              }
            ],
            neighborhoods: [
              {
                name: "Downtown White Plains",
                description: "Urban core with modern developments",
                features: ["Shopping", "Dining", "Transportation"]
              }
            ],
            seoStrategies: [
              {
                title: "Commuter Focus",
                description: "Target NYC commuters"
              }
            ]
          }
        ]
      }
    ]
  },
  arizona: {
    name: "Arizona",
    description: "Master the Southwest's dynamic real estate landscape.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    counties: [
      {
        name: "Maricopa County",
        slug: "maricopa",
        description: "Phoenix metropolitan area and surrounding communities.",
        cities: [
          {
            name: "Phoenix",
            slug: "phoenix",
            description: "Fast-growing desert metropolis.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$425,000",
                description: "Median home value in Phoenix"
              }
            ],
            neighborhoods: [
              {
                name: "Arcadia",
                description: "Upscale neighborhood with mountain views",
                features: ["Mountain Views", "Luxury Homes", "Shopping"]
              }
            ],
            seoStrategies: [
              {
                title: "Growth Market",
                description: "Target relocating buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Pima County",
        slug: "pima",
        description: "Tucson's growing communities.",
        cities: [
          {
            name: "Tucson",
            slug: "tucson",
            description: "Historic desert city with modern amenities.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$350,000",
                description: "Median home value in Tucson"
              }
            ],
            neighborhoods: [
              {
                name: "Catalina Foothills",
                description: "Upscale area with mountain views",
                features: ["Mountain Views", "Luxury Homes", "Golf"]
              }
            ],
            seoStrategies: [
              {
                title: "Lifestyle Focus",
                description: "Target outdoor enthusiasts"
              }
            ]
          }
        ]
      },
      {
        name: "Coconino County",
        slug: "coconino",
        description: "Mountain living and outdoor lifestyle.",
        cities: [
          {
            name: "Flagstaff",
            slug: "flagstaff",
            description: "Mountain town with four-season climate.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$500,000",
                description: "Median home value in Flagstaff"
              }
            ],
            neighborhoods: [
              {
                name: "Downtown Flagstaff",
                description: "Historic district with charm",
                features: ["Historic Buildings", "Dining", "Shopping"]
              }
            ],
            seoStrategies: [
              {
                title: "Mountain Living",
                description: "Target outdoor lifestyle buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Yavapai County",
        slug: "yavapai",
        description: "Historic towns and retirement communities.",
        cities: [
          {
            name: "Prescott",
            slug: "prescott",
            description: "Historic mountain town with mild climate.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$450,000",
                description: "Median home value in Prescott"
              }
            ],
            neighborhoods: [
              {
                name: "Downtown Prescott",
                description: "Historic Whiskey Row district",
                features: ["Historic Buildings", "Entertainment", "Shopping"]
              }
            ],
            seoStrategies: [
              {
                title: "Retirement Focus",
                description: "Target active adult buyers"
              }
            ]
          }
        ]
      },
      {
        name: "Pinal County",
        slug: "pinal",
        description: "Growing communities between Phoenix and Tucson.",
        cities: [
          {
            name: "Casa Grande",
            slug: "casa-grande",
            description: "Fast-growing city with affordable housing.",
            marketStats: [
              {
                label: "Average Home Price",
                value: "$300,000",
                description: "Median home value in Casa Grande"
              }
            ],
            neighborhoods: [
              {
                name: "Mission Royale",
                description: "Active adult community",
                features: ["Golf Course", "Community Center", "Activities"]
              }
            ],
            seoStrategies: [
              {
                title: "Value Focus",
                description: "Target value-seeking buyers"
              }
            ]
          }
        ]
      }
    ]
  }
}

type StateParams = {
  state: keyof typeof stateData
}

export async function generateMetadata({ params }: { params: StateParams }): Promise<Metadata> {
  const state = stateData[params.state]
  if (!state) return notFound()

  return {
    title: `Best SEO Services in ${state.name} | Workflow Champions`,
    description: `Find local Real Estate SEO services in ${state.name}. We help real estate agents dominate their local markets with proven SEO strategies.`,
  }
}

export default function StatePage({ params }: { params: StateParams }) {
  const state = stateData[params.state]
  if (!state) return notFound()

  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={state.image}
            alt={`${state.name} real estate market`}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
                Best SEO Services in {state.name}
              </h1>
              <p className="text-lg leading-8 mb-8">
                {state.description}
              </p>
              <Link
                href="https://calendly.com/eric-workflowchampions/30min"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Your {state.name} SEO Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Counties Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Counties We Serve in {state.name}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Helping real estate agents dominate local search results across {state.name}.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {state.counties.map((county) => (
              <Link
                key={county.slug}
                href={`/locations/${params.state}/${county.slug}`}
                className="group relative overflow-hidden rounded-lg border border-gray-200 p-8 hover:border-primary-200 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600">
                    {county.name}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {county.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Cities:</h4>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {county.cities.map((city) => (
                        <li key={city.slug} className="text-gray-600">
                          • {city.name}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="btn-primary w-full text-center"
                    >
                      Learn More About {county.name}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 