import { IAdminUser } from "~/types/admin";
import {TLang} from "~/services/api/type";

export interface IBrochure {
  id: number;
  title: string;
  createDate?: Date;
  admin: IAdminUser;
  category: string;
}

export interface IBrochureType {
  createdAt: string
  lang: TLang;
  title: string
  updatedAt: string
  __v: 0;
  _id: string
}
