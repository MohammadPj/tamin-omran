import { NextRequest, NextResponse } from "next/server";
import { defaultLang, languages } from "~/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const currentLang = pathname!.toLowerCase().split("/")[1];

  const pathnameIsValid = languages.some((lang) => {
    return pathname.startsWith(`/${lang}`);
  });

  if (pathnameIsValid) {
  } else {
    // rewrite it so next.js will render `/` as if it was `/fa`
    if (!pathname.startsWith("/images")) {
      return NextResponse.rewrite(
        new URL(`/${defaultLang}${pathname}`, request.url)
      );
    }
  }

    console.log(
      pathname.replace(`/${defaultLang}`, pathname.startsWith("/") ? "" : "")
    );

  // redirect to / if route was /fa/ir
  if (currentLang === defaultLang) {
  console.log('currentLang', currentLang)

    return NextResponse.redirect(
      new URL(pathname.replace(`/${defaultLang}`, "") + "/", request.url)
    );
  }
}
export const config = {
  // do not localize next.js paths
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
