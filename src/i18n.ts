import get from "lodash.get";
import { IDictionaries, NestedKeyOf } from "~/dictionaries";
import {store} from "~/store/store";

export const defaultLang = "fa";
export const languages = ["en", "fa"] as const;
export type ValidLocale = typeof languages[number];

const dictionaries = {
  en: () =>
    import("./dictionaries/en-US.json").then((module) => module.default),
  fa: () =>
    import("./dictionaries/fa-IR.json").then((module) => module.default),
};

export const getDictionary = async () => {
  const lang = store.getState().common.lang
  const dictionary = await dictionaries[lang]();

  return (path: NestedKeyOf<IDictionaries>, params?: { [key: string]: string | number }) => {

    let translation = get(dictionary, path);
    if(typeof translation !== "string") return

    if(params) {

      Object.entries(params).forEach(([key, value]) => {
        // @ts-ignore
        translation = translation.replace(`{{ ${key} }}`, String(value));
      });

      return  translation
    } else {
      return  translation
    }
  }
};
