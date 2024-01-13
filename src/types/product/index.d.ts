import {TLang} from "~/services/api/type";

interface IProductSpecifications {
  title: string;
  value: string
}

export interface IProduct {
  _id: string
  title: {fa: string; en: string};
  category: ICategory
  brand: IBrand
  createdAt: Date;
  updatedAt: Date;
  image: string;
  images: string[]
  isAvailable: boolean
  engineNumber: string;
  technicalNumber: string
  description: {fa: string; en: string};
  review: {fa: string; en: string};
}

export interface ICategory {
  _id: string
  title: {
    fa: string;
    en: string
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IBrand {
  _id: string
  title: string;
  createdAt: Date;
  updatedAt: Date;
}