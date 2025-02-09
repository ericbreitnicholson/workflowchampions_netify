import urllib.request
import urllib.error
import sys

def verify_image_url(url):
    try:
        # Add User-Agent header to avoid 403 errors
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        response = urllib.request.urlopen(req)
        code = response.getcode()
        if code == 200:
            print(f'✓ Image URL is valid (Status code: {code})')
            return True
        else:
            print(f'✗ Image URL returned status code: {code}')
            return False
    except urllib.error.HTTPError as e:
        print(f'✗ HTTP Error: {e.code} - {e.reason}')
        return False
    except urllib.error.URLError as e:
        print(f'✗ URL Error: {e.reason}')
        return False
    except Exception as e:
        print(f'✗ Error: {e}')
        return False

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print('Usage: python verify_image.py <image_url>')
        sys.exit(1)
    
    url = sys.argv[1]
    success = verify_image_url(url)
    sys.exit(0 if success else 1) 