import { NextRequest, NextResponse } from "next/server";
import { defaultLang, languages } from "~/i18n";

export function middleware(request: any) {
  const pathname = request.nextUrl.pathname;

  const currentLang = pathname!.toLowerCase().split("/")[1];

  const pathnameIsValid = languages.some((lang) => {
    return pathname.startsWith(`/${lang}`);
  });

  // redirect to /dashboard/products in /dashboard
  if (pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/product", request.url));
  }

  if (!pathnameIsValid) {
    // rewrite it so next.js will render `/` as if it was `/fa`
    return NextResponse.rewrite(
      new URL(`/${defaultLang}${pathname}` + request.nextUrl.search, request.url)
    );
  }

  // redirect to / if route was /fa/ir
  if (currentLang === defaultLang) {
    const newUrl = new URL(
      request.url.replace(`/${defaultLang}`, ""),
      request.url
    );

    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  // do not localize next.js paths
  matcher: [
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)",
  ],
};
