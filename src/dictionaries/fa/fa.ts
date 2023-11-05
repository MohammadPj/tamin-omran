import {homeDictionary} from "~/dictionaries/fa/sections/home";
import {commonDictionary} from "~/dictionaries/fa/sections/common";
import {IDictionary} from "~/dictionaries";

export const fa: IDictionary = {
  common: {
    ...commonDictionary
  },
  home: {
    ...homeDictionary
  },
};
