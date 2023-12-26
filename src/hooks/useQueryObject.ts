'use client'
import {useRouter, useSearchParams} from "next/navigation";
import queryString from "querystring";

export const useQueryObject = () => {

  const router = useRouter();

  const searchParams = useSearchParams();
  const query = queryString.parse(searchParams.toString());

  const push = (pathname: string, query: {[x: string]: any}) => {
    const newQuery = queryString.stringify(query);

    router.push((pathname + "?" + newQuery) as any);
  }

  return {query, push}
}