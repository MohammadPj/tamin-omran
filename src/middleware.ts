import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, getLocalePartsFrom, locales } from "~/i18n";
import { cookies } from 'next/headers'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  const pathnameIsValid = locales.some((locale) => {
    const localeParts = getLocalePartsFrom({ locale });
    return pathname.startsWith(`/${localeParts.lang}/${localeParts.country}`);
  });

  if (pathnameIsValid) {
    console.log('set cookie')
    request.cookies.set('name', "mohammad")
  } else {
    // rewrite it so next.js will render `/` as if it was `/fa/ir`
    if (!pathname.startsWith("/images")) {
      return NextResponse.rewrite(
        new URL(
          `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}${pathname}`,
          request.url
        )
      );
    }
  }

  // redirect to / if route was /fa/ir
  if (
    currentPathnameParts.lang === defaultLocaleParts.lang &&
    currentPathnameParts.country === defaultLocaleParts.country
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}`,
          pathname.startsWith("/") ? "/" : ""
        ),
        request.url
      )
    );
  }
}
export const config = {
  // do not localize next.js paths
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
