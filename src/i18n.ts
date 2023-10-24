// i18n.ts
import {IDictionaries, NestedKeyOf} from "~/dictionaries";
import {store} from "~/store/store";

const dictionaries: Record<ValidLocale, any> = {
  "en-US": () =>
    import("./dictionaries/en-US.json").then((module) => module.default),
  "fa-IR": () =>
    import("./dictionaries/fa-IR.json").then((module) => module.default),
} as const;

export const getTranslator = async (locale: ValidLocale) => {
  // console.log('store', store.getState())
  const dictionary = await dictionaries[locale]();
  return (key: NestedKeyOf<IDictionaries>, params?: { [key: string]: string | number }) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);
    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};

export const defaultLocale = "fa-IR";
export const locales = ["en-US", 'fa-IR'] as const;
export type ValidLocale = typeof locales[number];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

export const getLocalePartsFrom = ({ pathname, locale }: LocaleSource) => {

  if (locale) {
    const localeParts = locale.toLowerCase().split("-");
    return {
      lang: localeParts[0],
      country: localeParts[1],
    };
  } else {
    const pathnameParts = pathname!.toLowerCase().split("/");
    return {
      lang: pathnameParts[1],
      country: pathnameParts[2],
    };
  }
};