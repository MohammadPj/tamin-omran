import {IUser} from "~/types/user";
import {IMeta} from "~/app/[lang]/(main)/articles/page";
import {IBrand} from "~/types/product";

export type TLang = "fa" | "en";

export interface ICommonFilterParams {
  page?: number;
  limit?: number;
  sort?: string;

  createdAt?: Date;
  updatedAt?: Date;
}


// ---------------------------  BrochureType  ------------------------------
export interface IBrochureTypeParams extends ICommonFilterParams {
  title?: string;
  lang?: TLang;
}

export interface IBrochureTypeBody
  extends Omit<IBrochureTypeParams, keyof ICommonFilterParams> {}

export interface IEditBrochureTypeBody extends IBrochureTypeBody {
  id: string
}

// ---------------------------  Brochure  ------------------------------
export interface IBrochureParams extends ICommonFilterParams {
  title?: string;
  lang: TLang;
  brochureTypeId?: string;
  file?: string;
}

export interface ICreateBrochureBody {
  title?: string;
  lang: TLang;
  brochureTypeId?: string;
}

export interface IEditBrochureBody extends ICreateBrochureBody {
  id: string
}

// ---------------------------  Article  ------------------------------
export interface IArticleParams extends ICommonFilterParams {
  lang: TLang;
  title?: string;
  content?: string
}

export interface ICreateArticleBody {
  lang: TLang;
  title: string;
  content: string
}

export interface IEditArticleBody extends Partial<ICreateArticleBody>{
  id: string;
}

// ---------------------------  Brand  ------------------------------
export interface IBrandParams extends ICommonFilterParams {
  title?: string;
}

export interface IBrandBody
  extends Omit<IBrandParams, keyof ICommonFilterParams> {}

export interface IEditBrandBody extends IBrandBody{
  id: string
}

// ---------------------------  Category  ------------------------------
export interface ICategoryParams extends ICommonFilterParams {
  title?: {fa?: string, en?: string};
}

export interface ICategoryBody
  extends Omit<ICategoryParams, keyof ICommonFilterParams> {}

export interface IEditCategoryBody extends ICategoryBody{
  id: string
}

// ---------------------------  Product  ------------------------------
export interface IProductParams extends ICommonFilterParams {
  title?: {fa: string; en: string};
  category?: string;
  brand?: {fa: string; en: string};
  images?: string[]
  isAvailable?: boolean
  engineNumber?: string;
  technicalNumber?: string
  description?: {fa: string; en: string};
  review?: {fa: string; en: string};
}

export interface IProductBody
  extends Omit<IProductParams, keyof ICommonFilterParams | 'category' | 'brand'> {
  categoryId: string;
  brandId: string;
}

export interface IEditProductBody extends IProductBody {
  id: string
}

// ---------------------------  Product  ------------------------------
export interface ILoginBody {
  username: string;
  password: string;
}

export interface IRegisterBody {
  firstName: string;
  lastName: string
  username: string;
  password: string
}

export interface ILoginResponse extends IUser {
  token: string
}

export interface IRegisterResponse extends IUser {
  token: string
}

export interface IUserParams {
  username: string
}

export interface IGetUsers {
  data: IUser[],
  meta: IMeta
}

export interface IEngineNumberParams {
  page?: number;
  limit?: number
}

export interface IGetEngineNumbers {
  data: IBrand[],
  meta: IMeta
}