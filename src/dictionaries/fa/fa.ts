import {homeDictionary} from "~/dictionaries/fa/sections/home";
import {commonDictionary} from "~/dictionaries/fa/sections/common";
import {IDictionary} from "~/dictionaries";
import {productsDictionary} from "~/dictionaries/fa/sections/products";
import {contactUsDictionary} from "~/dictionaries/fa/sections/contactUsDictionary";

export const fa: IDictionary = {
  common: {
    ...commonDictionary
  },
  home: {
    ...homeDictionary
  },
  products: {
    ...productsDictionary
  },
  contactUs: {...contactUsDictionary}
};
