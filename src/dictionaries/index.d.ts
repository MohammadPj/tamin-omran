import {ICommonDictionary} from "~/dictionaries/types/common";
import {IHomeDictionary} from "~/dictionaries/types/home";

export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

interface IDictionary {
  common: ICommonDictionary,
  home: IHomeDictionary
}
