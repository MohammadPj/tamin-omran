import {homeDictionary} from "~/dictionaries/en/sections/home";
import {commonDictionary} from "~/dictionaries/en/sections/common";
import {IDictionary} from "~/dictionaries";

export const en: IDictionary = {
  common: {
    ...commonDictionary
  },
  home: {
    ...homeDictionary
  },
};
