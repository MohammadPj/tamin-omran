import get from "lodash.get";
import { IDictionaries, NestedKeyOf } from "~/dictionaries";
import { store } from "~/store/store";
import {en} from "~/dictionaries/en/en";
import {fa} from "~/dictionaries/fa/fa";

export const defaultLang = "fa";
export const languages = ["en", "fa"] as const;


const dictionaries = {
  en,
  fa
};

export const getDictionary = () => {
  const lang = store.getState().common.lang;
  const dictionary = dictionaries[lang];

  return (
    path: NestedKeyOf<IDictionaries>,
    params?: { [key: string]: string | number }
  ) => {
    let translation = get(dictionary, path);
    if (typeof translation !== "string") return;

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        // @ts-ignore
        translation = translation.replace(`{{ ${key} }}`, String(value));
      });

      return translation;
    } else {
      return translation;
    }
  };
};
