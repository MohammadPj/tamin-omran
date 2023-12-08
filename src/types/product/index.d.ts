import {TLang} from "~/services/api/type";

interface IProductSpecifications {
  title: string;
  value: string
}

export interface IProduct {
  name: string,
  uniqueCode: string,
  description?: string;
  specifications?: IProductSpecifications[]
  images?: string[]
  createDate?: Date
  admin?: string
  state?: string
}

export interface ICategory {
  _id: string
  title: string;
  lang: TLang;
  createdAt: Date;
  updatedAt: Date;
}