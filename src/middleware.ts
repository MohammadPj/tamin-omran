import { NextRequest, NextResponse } from "next/server";
import {defaultLocale, getLocalePartsFrom, locales} from "~/i18n";
import {store} from "~/store/store";
import {setLanguage} from "~/store/common/commonSlice";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
  const currentPathnameParts = getLocalePartsFrom({ pathname });

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    const localeParts = getLocalePartsFrom({ locale });
    return !pathname.startsWith(`/${localeParts.lang}/${localeParts.country}`);
  });


  // Check if the default locale is in the pathname
    console.log('pathname1', pathname)
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

  if (pathnameIsMissingValidLocale) {

    // rewrite it so next.js will render `/` as if it was `/fa/ir`
    return NextResponse.rewrite(
      new URL(
        `/${defaultLocaleParts.lang}/${defaultLocaleParts.country}${pathname}`,
        request.url
      )
    );
  } else {
    console.log('currentPathnameParts', currentPathnameParts)
  }




}
export const config = {
  // do not localize next.js paths
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
