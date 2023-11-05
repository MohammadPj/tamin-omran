import { homeDictionary } from "~/dictionaries/en/sections/home";
import { commonDictionary } from "~/dictionaries/en/sections/common";
import { IDictionary } from "~/dictionaries";
import { productsDictionary } from "~/dictionaries/en/sections/products";
import { contactUsDictionary } from "~/dictionaries/en/sections/contactUsDictionary";

export const en: IDictionary = {
  common: {
    ...commonDictionary,
  },
  home: {
    ...homeDictionary,
  },
  products: {
    ...productsDictionary,
  },
  contactUs: { ...contactUsDictionary },
};
