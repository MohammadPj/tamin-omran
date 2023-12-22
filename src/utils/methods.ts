import {languages} from "~/i18n";
import {useSearchParams} from "next/navigation";
import queryString from "querystring";

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

export const useQueryObject = () => {
  const searchParams = useSearchParams();
  const query = queryString.parse(searchParams.toString());

  return {query}
}