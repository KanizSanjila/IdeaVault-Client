import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { auth } from './lib/auth';

export async function proxy(request) {
  const session = await auth.api.getSession({ headers: await headers() });

  const protectedRoutes = ['/details','/add-idea','/my-ideas','/my-interactions']

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/details/:path*','/add-idea','/my-ideas','/my-interactions'],
};

