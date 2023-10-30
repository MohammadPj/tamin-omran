import {IDictionary, NestedKeyOf} from "~/dictionaries";
import { store } from "~/store/store";
import {en} from "~/dictionaries/en/en";
import {fa} from "~/dictionaries/fa/fa";
import {get} from "~/utils/methods";

export type TLanguages = "fa" | "en"
export const defaultLang = "fa";
export const languages = ["en", "fa"] as const;

const dictionaries = {
  en,
  fa
};

export const getDictionary = (lang?: TLanguages) => {
  const langStore = store.getState().common.lang;
  const dictionary = lang ? dictionaries[lang] : dictionaries[langStore];

  return (
    path: NestedKeyOf<IDictionary>,
    params?: { [key: string]: string | number }
  ): any => {

    let translation = get(dictionary, path);

    if (params && typeof translation == "string") {
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
