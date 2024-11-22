import {NextRequest, NextResponse} from 'next/server';

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/test') {
    return NextResponse.rewrite(new URL('/', req.url));
  }
}

export const config = {
  matcher: '/test'
};
