"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "qs";
import {debounce} from "~/utils/methods";

export const useQueryObject = () => {
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();
  const query = qs.parse(searchParams.toString());

  const setQuery = (query: { [x: string]: any }) => {
    const newQuery = qs.stringify(query, { arrayFormat: "indices" });

    router.push((pathname + "?" + newQuery) as any);
  };

  const addCheckboxToQuery = ({
    queryName,
    checked,
    value,
  }: {
    queryName: string;
    checked: boolean;
    value: string;
  }) => {
    let values = (query?.[queryName] as string[]) || [];

    if (checked) {
      const index = values?.findIndex((v) => v === value);

      if (index < 0) {
        values.push(value);
      }
    } else {
      values = values?.filter((v) => v !== value);
    }

    setQuery({
      ...query,
      [queryName]: values,
    });
  };

  const addTextQuery = ({queryName, value}: {queryName: string, value: string}) => {

    console.log('v', value)
    if (value) {
      setQuery({ ...query, [queryName]: value });
    } else if (query?.[queryName]) {
      delete query?.[queryName];
      setQuery(query);
    }
  }

  const debounceAddTextQuery = debounce(addTextQuery, 500);

  return { query, setQuery, addCheckboxToQuery, debounceAddTextQuery };
};
