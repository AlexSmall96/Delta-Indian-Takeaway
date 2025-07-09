import { http } from "msw";
const siteUrl = 'https://delta-map-api.onrender.com'

// Request handler for get /map. Returns image buffer and tracks mapType.

// Track map type
let mapType = 'roadmap'
const getMapType = () => mapType

// Request handler
const getMap = http.get(`${siteUrl}/map`, ({ request }) => {
    // Update maptype based on query
    const url = new URL(request.url)
    mapType = url.searchParams.get('type')
    // Simulate a PNG image response
    const mockImageBuffer = Buffer.from(
        '89504E470D0A1A0A0000000D4948445200000001000000010806000000' +
        '1F15C4890000000A49444154789C6360000002000100A2F7A2D200000000' +
        '49454E44AE426082',
        'hex'
    );
    // Return image
    return new Response(mockImageBuffer, {
        status: 200,
        headers: {
            'Content-Type': 'image/png',
        },
    });
})

export { getMapType, getMap }
