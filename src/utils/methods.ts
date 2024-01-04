import {languages} from "~/i18n";

export const get = (from: {}, path: string) =>
  path
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    // @ts-ignore
    .reduce((prev, cur) => prev && prev[cur], from);

export const getUrlWithoutLang = (pathname: string): string => {

  const splitPathname = pathname.split("/")
  // @ts-ignore
  if(languages.includes(pathname.split("/")[1])) {
    splitPathname.splice(1, 1)
  }

  return splitPathname.join('/')
}

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}
