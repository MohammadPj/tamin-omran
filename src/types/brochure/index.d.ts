import {IAdminUser} from "~/types/admin";

export interface IBrochure {
  id: number;
  title: string;
  createDate?: Date;
  admin: IAdminUser;
  category: string
}