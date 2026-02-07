import { NextRequest, NextResponse } from "next/server";
import { getSpanishPathForEnglish, normalizePath } from "./app/i18n/routeMap";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalized = normalizePath(pathname);

  const spanishPath = getSpanishPathForEnglish(normalized);
  if (spanishPath && spanishPath !== normalized) {
    const url = request.nextUrl.clone();
    url.pathname = spanishPath;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
