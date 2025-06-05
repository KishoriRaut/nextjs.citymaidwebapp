import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// The hostname should be your production domain with https
const hostname = 'https://citymaidservices.net';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  
  // Get the hostname of the request
  const hostname = request.headers.get('host') || 'citymaidservices.net';
  const currentHost = hostname.replace('www.', '');

  // Prevent security issues – users should not be able to read your source code
  if (url.pathname.startsWith('/.git') || url.pathname.includes('/.')) {
    return new NextResponse(null, { status: 404 });
  }

  // Redirect to the canonical URL (non-www to www or vice versa)
  const shouldRedirect = 
    !hostname.includes('citymaidservices.net') || 
    (hostname.startsWith('www.') && hostname !== 'www.citymaidservices.net');
    
  if (shouldRedirect) {
    const newUrl = new URL(url);
    newUrl.hostname = 'citymaidservices.net';
    return NextResponse.redirect(newUrl, 301);
  }

  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && 
      request.headers.get('x-forwarded-proto') !== 'https' &&
      !request.headers.get('host')?.includes('localhost')) {
    return NextResponse.redirect(
      `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
      301
    );
  }

  return NextResponse.next();
}

// Only run middleware on these paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap|robots).*)',
  ],
};
