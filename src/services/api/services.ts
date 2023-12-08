import { http } from "~/services/core/http";
import { routes } from "~/services/api/routes";
import {
  IArticleBody,
  IArticleParams,
  IBrandBody,
  IBrandParams,
  IBrochureBody,
  IBrochureParams,
  IBrochureTypeBody,
  IBrochureTypeParams,
  ICategoryBody,
  ICategoryParams, IEditArticleBody,
  IEditBrandBody,
  IEditBrochureBody,
  IEditBrochureTypeBody,
  IEditCategoryBody, IEditProductBody,
  ILoginBody,
  IProductBody,
  IProductParams,
} from "~/services/api/type";
import {IBrochure, IBrochureType} from "~/types/brochure";
import {IBrand, ICategory} from "~/types/product";


// ---------------------------  BrochureTypes  ------------------------------
export const getBrochureTypes = (params: IBrochureTypeParams): Promise<IBrochureType[]> =>
  http.get(routes.brochureType, { params });

export const getSingleBrochureType = (brochureTypeId: string) =>
  http.get(routes.singleBrochureType(brochureTypeId));

export const createBrochureType = (body: IBrochureTypeBody) =>
  http.post(routes.brochureType, body);

export const editeBrochureType = ({id, ...body}: IEditBrochureTypeBody) =>
  http.put(routes.singleBrochureType(id), body);

export const deleteBrochureType = (brochureTypeId: string) =>
  http.delete(routes.singleBrochureType(brochureTypeId));


// ---------------------------  Brochure ------------------------------
export const getBrochures = (params: IBrochureParams) =>
  http.get(routes.brochure, { params });

export const getSingleBrochure = (brochureId: string) =>
  http.get(routes.singleBrochure(brochureId));

export const createBrochure = (body: IBrochureBody): Promise<IBrochure> =>
  http.post(routes.brochure, body);

export const editeBrochure = ({id, ...body}: IEditBrochureBody) =>
  http.put(routes.singleBrochure(id), body);

export const deleteBrochure = (brochureId: string) =>
  http.delete(routes.singleBrochure(brochureId));


// ---------------------------  Article ------------------------------
export const getArticles = (params: IArticleParams) =>
  http.get(routes.article, { params });

export const getSingleArticle = (articleId: string) =>
  http.get(routes.singleArticle(articleId));

export const createArticle = (body: IArticleBody) =>
  http.post(routes.article, body);

export const editeArticle = ({id, ...body}: IEditArticleBody): Promise<any> =>
  http.put(routes.singleArticle(id), body);

export const deleteArticle = (articleId: string) =>
  http.delete(routes.singleArticle(articleId));


// ---------------------------  Brand ------------------------------
export const getBrands = (params: IBrandParams): Promise<IBrand[]> =>
  http.get(routes.brand, { params });

export const getSingleBrand = (brandId: string) =>
  http.get(routes.singleBrand(brandId));

export const createBrand = (body: IBrandBody) =>
  http.post(routes.brand, body);

export const editeBrand = ({id, ...body}: IEditBrandBody) =>
  http.put(routes.singleBrand(id), body);

export const deleteBrand = (brandId: string) =>
  http.delete(routes.singleBrand(brandId));


// ---------------------------  Category ------------------------------
export const getCategories = (params: ICategoryParams): Promise<ICategory[]> =>
  http.get(routes.category, { params });

export const getSingleCategory = (brochureId: string) =>
  http.get(routes.singleCategory(brochureId));

export const createCategory = (body: ICategoryBody) =>
  http.post(routes.category, body);

export const editeCategory = ({id, ...body}: IEditCategoryBody) =>
  http.put(routes.singleCategory(id), body);

export const deleteCategory = (brochureId: string) =>
  http.delete(routes.singleCategory(brochureId));


// ---------------------------  Product ------------------------------
export const getProducts = (params: IProductParams) =>
  http.get(routes.product, { params });

export const getSingleProduct = (productId: string) =>
  http.get(routes.singleProduct(productId));

export const createProduct = (body: IProductBody) =>
  http.post(routes.product, body);

export const editeProduct = ({id, ...body}: IEditProductBody) =>
  http.put(routes.singleProduct(id), body);

export const deleteProduct = (productId: string) =>
  http.delete(routes.singleProduct(productId));


// ---------------------------  Login ------------------------------
export const login = (body: ILoginBody): Promise<{ token: string }> =>
  http.post(routes.login, body);
