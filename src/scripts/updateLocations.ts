import fs from 'fs'
import { harrisCountyData } from '../data/harris-county'
import { stateData } from '../data/generatedLocations'

// Read the current locations data
const locationsPath = 'src/data/generatedLocations.ts'
const currentContent = fs.readFileSync(locationsPath, 'utf-8')

// Find the Texas state data and update Harris County
const texasData = stateData['texas']
if (texasData) {
  const countyIndex = texasData.counties.findIndex(c => c.slug === 'harris')
  if (countyIndex !== -1) {
    texasData.counties[countyIndex] = harrisCountyData
  }
}

// Generate the new content
const newContent = `import { StateData } from '../app/locations/[state]/page'

export const stateData: StateData = ${JSON.stringify(stateData, null, 2)}`

// Write the updated content back to the file
fs.writeFileSync(locationsPath, newContent)

console.log('Successfully updated Harris County data in locations file') 