import {TLang} from "~/services/api/type";

export interface IBrochure {
  _id: string;

  title: string;
  lang: TLang;
  brochureType: IBrochureType
  file: File
  createdAt: string;
  updatedAt: string;
}

export interface IBrochureType {
  createdAt: string
  lang: TLang;
  title: string
  updatedAt: string
  __v: 0;
  _id: string
}
