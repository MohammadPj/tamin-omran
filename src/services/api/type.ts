export type TLang = "fa" | "en";

export interface ICommonFilterParams {
  page?: number;
  limit?: number;
  sort?: string;

  createdAt?: Date;
  updatedAt?: Date;
}


export interface IBrochureTypeParams extends ICommonFilterParams {
  title?: string;
  lang?: TLang;
}

export interface IBrochureTypeBody
  extends Omit<IBrochureTypeParams, keyof ICommonFilterParams> {}

export interface IEditBrochureTypeBody extends IBrochureTypeBody {
  id: string
}

export interface IBrochureParams extends ICommonFilterParams {
  title?: string;
  lang: TLang;
  brochureType?: string;
  file?: string;
}

export interface IBrochureBody
  extends Omit<IBrochureParams, keyof ICommonFilterParams> {}

export interface IEditBrochureBody extends IBrochureBody {
  id: string
}

export interface IArticleParams extends ICommonFilterParams {
  title: string;
  lang: TLang;
  content: string
}

export interface IArticleBody
  extends Omit<IArticleParams, keyof ICommonFilterParams> {}

export interface IBrandParams extends ICommonFilterParams {
  title: string;
  lang: TLang;
}

export interface IBrandBody
  extends Omit<IBrandParams, keyof ICommonFilterParams> {}

export interface ICategoryParams extends ICommonFilterParams {
  title?: string;
  lang: TLang;
}

export interface ICategoryBody
  extends Omit<ICategoryParams, keyof ICommonFilterParams> {}

export interface IEditCategoryBody extends ICategoryBody{
  id: string
}

export interface IProductParams extends ICommonFilterParams {
  title: string;
  lang: TLang;
  categoryId: string
  brandId: string
  images: string[]
  isAvailable: boolean
  engineNumber: string;
  technicalNumber: string
  description: string
  review: string
}

export interface IProductBody
  extends Omit<IProductParams, keyof ICommonFilterParams> {}

export interface ILoginBody {
  email: string;
  password: string;
}
