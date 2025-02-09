import { County } from '../app/locations/[state]/page'

export const harrisCountyData: County = {
  name: "Harris",
  slug: "harris",
  description: "Harris County, home to Houston and its diverse suburbs, is Texas' most populous county and a dynamic real estate market. From the energy corridor to the medical center, our SEO strategies help agents connect with buyers and sellers in this thriving metropolitan area.",
  image: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  cities: [
    {
      name: "Houston",
      slug: "houston",
      description: "As the heart of Harris County, Houston offers diverse real estate opportunities from luxury high-rises in River Oaks to charming bungalows in The Heights.",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      marketStats: [
        {
          label: "Average Home Price",
          value: "$375,000",
          description: "Median home value in Houston"
        },
        {
          label: "Market Growth",
          value: "6.5%",
          description: "Annual market appreciation"
        },
        {
          label: "Days on Market",
          value: "45",
          description: "Average days to sell a property"
        }
      ],
      neighborhoods: [
        {
          name: "The Heights",
          description: "Historic Houston neighborhood known for its Victorian architecture and vibrant local scene",
          features: ["Historic Homes", "Local Restaurants", "Arts District"]
        },
        {
          name: "River Oaks",
          description: "Prestigious area featuring luxury estates and high-end shopping",
          features: ["Luxury Homes", "Tree-lined Streets", "Upscale Shopping"]
        },
        {
          name: "Medical Center",
          description: "Dynamic area near the world's largest medical complex",
          features: ["Modern Condos", "Healthcare Hub", "Research Institutions"]
        },
        {
          name: "Energy Corridor",
          description: "West Houston's business district with excellent schools",
          features: ["Corporate Hub", "Parks", "Master-planned Communities"]
        }
      ],
      seoStrategies: [
        {
          title: "Local Market Analysis",
          description: "Deep insights into Houston's diverse submarkets"
        },
        {
          title: "Neighborhood Expertise",
          description: "Targeted content for each unique district"
        },
        {
          title: "Market Trends",
          description: "Real-time data on Houston's dynamic market"
        }
      ]
    },
    {
      name: "Spring",
      slug: "spring",
      description: "A rapidly growing suburb north of Houston, known for its excellent schools and family-friendly communities.",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      marketStats: [
        {
          label: "Average Home Price",
          value: "$320,000",
          description: "Median home value in Spring"
        },
        {
          label: "Market Growth",
          value: "7.2%",
          description: "Annual market appreciation"
        },
        {
          label: "Days on Market",
          value: "38",
          description: "Average days to sell a property"
        }
      ],
      neighborhoods: [
        {
          name: "Old Town Spring",
          description: "Historic district with charming shops and restaurants",
          features: ["Historic Area", "Shopping", "Dining"]
        },
        {
          name: "Klein",
          description: "Family-oriented community with top-rated schools",
          features: ["Great Schools", "Parks", "Family Living"]
        }
      ],
      seoStrategies: [
        {
          title: "Suburban Market Focus",
          description: "Specialized strategies for Spring's growing suburban market"
        },
        {
          title: "School District Expertise",
          description: "Highlight top-rated schools and family-friendly amenities"
        },
        {
          title: "Community Insights",
          description: "Showcase Spring's unique blend of history and modern growth"
        }
      ]
    }
  ]
} 