import { NextRequest, NextResponse } from "next/server";
import {defaultLang, languages} from "~/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const currentLang = pathname!.toLowerCase().split("/")[1]

  const pathnameIsValid = languages.some((lang) => {
    return pathname.startsWith(`/${lang}`);
  });

  if (pathnameIsValid) {
  } else {
    // rewrite it so next.js will render `/` as if it was `/fa/ir`
    if (!pathname.startsWith("/images")) {
      return NextResponse.rewrite(
        new URL(
          `/${defaultLang}${pathname}`,
          request.url
        )
      );
    }
  }

  // redirect to / if route was /fa/ir
  if (
    currentLang === defaultLang
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${defaultLang}`,
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
