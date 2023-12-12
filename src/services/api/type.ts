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
  lang: TLang;
}

export interface IBrandBody
  extends Omit<IBrandParams, keyof ICommonFilterParams> {}

export interface IEditBrandBody extends IBrandBody{
  id: string
}

// ---------------------------  Category  ------------------------------
export interface ICategoryParams extends ICommonFilterParams {
  title?: string;
  lang: TLang;
}

export interface ICategoryBody
  extends Omit<ICategoryParams, keyof ICommonFilterParams> {}

export interface IEditCategoryBody extends ICategoryBody{
  id: string
}

// ---------------------------  Product  ------------------------------
export interface IProductParams extends ICommonFilterParams {
  title?: string;
  lang: TLang;
  category?: string
  brand?: string
  images?: string[]
  isAvailable?: boolean
  engineNumber?: string;
  technicalNumber?: string
  description?: string
  review?: string
}

export interface IProductBody
  extends Omit<IProductParams, keyof ICommonFilterParams | 'category' | 'brand'> {
  categoryId: string;
  brandId: string
}

export interface IEditProductBody extends IProductBody {
  id: string
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegisterBody {
  name: string;
  email: string;
  password: string
}
