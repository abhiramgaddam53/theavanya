import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isAuth = request.cookies.get('admin_auth')?.value === 'true';

    // If user is accessing protected admin route (anything other than /admin login page)
    if (path.startsWith('/admin/') && !isAuth) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    // If user is authenticated and trying to access login page, redirect to dashboard
    if (path === '/admin' && isAuth) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
