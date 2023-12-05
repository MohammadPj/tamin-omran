import { http } from "~/services/core/http";
import { routes } from "~/services/api/routes";
import {
  IArticleBody,
  IArticleParams, IBrandBody, IBrandParams,
  IBrochureBody,
  IBrochureParams,
  IBrochureTypeBody,
  IBrochureTypeParams, ICategoryBody, ICategoryParams, IEditBrochureTypeBody,
  ILoginBody, IProductBody, IProductParams,
} from "~/services/api/type";


// ---------------------------  BrochureTypes  ------------------------------
export const getBrochureTypes = (params: IBrochureTypeParams) =>
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

export const createBrochure = (body: IBrochureBody) =>
  http.post(routes.brochure, body);

export const editeBrochure = (body: IBrochureBody) =>
  http.put(routes.brochure, body);

export const deleteBrochure = (brochureId: string) =>
  http.delete(routes.singleBrochure(brochureId));


// ---------------------------  Article ------------------------------
export const getArticles = (params: IArticleParams) =>
  http.get(routes.brochure, { params });

export const getSingleArticle = (brochureId: string) =>
  http.get(routes.singleArticle(brochureId));

export const createArticle = (body: IArticleBody) =>
  http.post(routes.brochure, body);

export const editeArticle = (body: IArticleBody) =>
  http.put(routes.brochure, body);

export const deleteArticle = (brochureId: string) =>
  http.delete(routes.singleArticle(brochureId));


// ---------------------------  Brand ------------------------------
export const getBrands = (params: IBrandParams) =>
  http.get(routes.brochure, { params });

export const getSingleBrand = (brochureId: string) =>
  http.get(routes.singleBrand(brochureId));

export const createBrand = (body: IBrandBody) =>
  http.post(routes.brochure, body);

export const editeBrand = (body: IBrandBody) =>
  http.put(routes.brochure, body);

export const deleteBrand = (brochureId: string) =>
  http.delete(routes.singleBrand(brochureId));


// ---------------------------  Category ------------------------------
export const getCategories = (params: ICategoryParams) =>
  http.get(routes.brochure, { params });

export const getSingleCategory = (brochureId: string) =>
  http.get(routes.singleCategory(brochureId));

export const createCategory = (body: ICategoryBody) =>
  http.post(routes.brochure, body);

export const editeCategory = (body: ICategoryBody) =>
  http.put(routes.brochure, body);

export const deleteCategory = (brochureId: string) =>
  http.delete(routes.singleCategory(brochureId));


// ---------------------------  Product ------------------------------
export const getProducts = (params: IProductParams) =>
  http.get(routes.brochure, { params });

export const getSingleProduct = (brochureId: string) =>
  http.get(routes.singleProduct(brochureId));

export const createProduct = (body: IProductBody) =>
  http.post(routes.brochure, body);

export const editeProduct = (body: IProductBody) =>
  http.put(routes.brochure, body);

export const deleteProduct = (brochureId: string) =>
  http.delete(routes.singleProduct(brochureId));


// ---------------------------  Login ------------------------------
export const login = (body: ILoginBody): Promise<{ token: string }> =>
  http.post(routes.login, body);
