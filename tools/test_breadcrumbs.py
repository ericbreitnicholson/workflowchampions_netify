import asyncio
from web_scraper import scrape_url
import json
import re

# Test URLs
test_urls = [
    'http://localhost:3000/services',  # Simple page
    'http://localhost:3000/locations/florida/miami-dade/miami',  # Deep nested page
    'http://localhost:3000/blog',  # Blog listing
    'http://localhost:3000/',  # Homepage (should have no breadcrumbs)
]

def extract_schema(html_content):
    """Extract JSON-LD schema from HTML content."""
    schema_match = re.search(r'<script type="application/ld\+json">(.*?)</script>', html_content, re.DOTALL)
    if schema_match:
        try:
            return json.loads(schema_match.group(1))
        except json.JSONDecodeError:
            return None
    return None

def verify_breadcrumb_schema(schema):
    """Verify the breadcrumb schema structure."""
    if not schema:
        return False, "No schema found"
    
    # Check basic structure
    if schema.get('@type') != 'BreadcrumbList':
        return False, "Schema is not of type BreadcrumbList"
    
    items = schema.get('itemListElement', [])
    if not items:
        return False, "No items in breadcrumb list"
    
    # Check each item
    for item in items:
        if item.get('@type') != 'ListItem':
            return False, f"Item is not of type ListItem: {item}"
        if 'position' not in item:
            return False, f"Item missing position: {item}"
        if 'item' not in item:
            return False, f"Item missing item property: {item}"
        if '@id' not in item['item']:
            return False, f"Item missing @id: {item}"
        if 'name' not in item['item']:
            return False, f"Item missing name: {item}"
    
    return True, "Schema validation passed"

async def verify_breadcrumbs():
    print("Starting breadcrumb verification...")
    
    for url in test_urls:
        print(f"\nTesting URL: {url}")
        
        # Fetch page content
        content = await scrape_url(url)
        if not content:
            print(f"Failed to fetch content from {url}")
            continue
        
        # Extract and verify schema
        schema = extract_schema(content)
        is_valid, message = verify_breadcrumb_schema(schema)
        
        print(f"Schema validation: {message}")
        if schema:
            print("Schema structure:")
            print(json.dumps(schema, indent=2))
        
        # Check for breadcrumb HTML
        has_nav = 'aria-label="Breadcrumb"' in content
        print(f"Has breadcrumb navigation: {has_nav}")
        
        # Check for Home link
        has_home = 'href="/"' in content and '>Home<' in content
        print(f"Has Home link: {has_home}")

if __name__ == "__main__":
    print("Starting breadcrumb tests...")
    
    # First ensure the development server is running
    print("Please ensure your Next.js development server is running on http://localhost:3000")
    input("Press Enter to continue...")
    
    # Run the tests
    asyncio.run(verify_breadcrumbs()) 