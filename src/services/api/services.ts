import { http } from "~/services/core/http";
import { routes } from "~/services/api/routes";
import {
  IArticleParams,
  IBrandBody,
  IBrandParams,
  IBrochureParams,
  IBrochureTypeBody,
  IBrochureTypeParams,
  ICategoryBody,
  ICategoryParams,
  ICreateArticleBody,
  ICreateBrochureBody,
  IEditArticleBody,
  IEditBrandBody,
  IEditBrochureBody,
  IEditBrochureTypeBody,
  IEditCategoryBody,
  IEditProductBody,
  ILoginBody, ILoginResponse,
  IProductBody,
  IProductParams,
  IRegisterBody, IRegisterResponse,
} from "~/services/api/type";
import { IBrochure, IBrochureType } from "~/types/brochure";
import { IBrand, ICategory, IProduct } from "~/types/product";
import axios from "axios";

// ---------------------------  BrochureTypes  ------------------------------
export const getBrochureTypes = (
  params: IBrochureTypeParams
): Promise<IBrochureType[]> => http.get(routes.brochureType, { params });

export const getSingleBrochureType = (brochureTypeId: string) =>
  http.get(routes.singleBrochureType(brochureTypeId));

export const createBrochureType = (body: IBrochureTypeBody) =>
  http.post(routes.brochureType, body);

export const editeBrochureType = ({ id, ...body }: IEditBrochureTypeBody) =>
  http.put(routes.singleBrochureType(id), body);

export const deleteBrochureType = (brochureTypeId: string) =>
  http.delete(routes.singleBrochureType(brochureTypeId));

// ---------------------------  Brochure  ------------------------------
export const getBrochures = (params: IBrochureParams) =>
  http.get(routes.brochure, { params });

export const getSingleBrochure = (brochureId: string) =>
  http.get(routes.singleBrochure(brochureId));

export const createBrochure = (body: ICreateBrochureBody): Promise<IBrochure> =>
  http.post(routes.brochure, body);

export const editeBrochure = ({ id, ...body }: IEditBrochureBody) =>
  http.put(routes.singleBrochure(id), body);

export const brochureFile = ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) =>
  http.patch(routes.brochureFile(id), formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteBrochure = (brochureId: string) =>
  http.delete(routes.singleBrochure(brochureId));

// ---------------------------  Article  ------------------------------
export const getArticles = (params: IArticleParams) =>
  http.get(routes.article, { params });

export const getSingleArticle = (articleId: string) =>
  http.get(routes.singleArticle(articleId));

export const createArticle = (body: ICreateArticleBody): Promise<any> =>
  http.post(routes.article, body);

export const editeArticle = ({ id, ...body }: IEditArticleBody): Promise<any> =>
  http.put(routes.singleArticle(id), body);

export const articleImage = ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) =>
  http.patch(routes.articleImage(id), formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteArticle = (articleId: string) =>
  http.delete(routes.singleArticle(articleId));

// ---------------------------  Brand  ------------------------------
export const getBrands = (params: IBrandParams): Promise<IBrand[]> =>
  http.get(routes.brand, { params });

export const getSingleBrand = (brandId: string) =>
  http.get(routes.singleBrand(brandId));

export const createBrand = (body: IBrandBody) => http.post(routes.brand, body);

export const editeBrand = ({ id, ...body }: IEditBrandBody) =>
  http.put(routes.singleBrand(id), body);

export const deleteBrand = (brandId: string) =>
  http.delete(routes.singleBrand(brandId));

// ---------------------------  Category  ------------------------------
export const getCategories = (params: ICategoryParams): Promise<ICategory[]> =>
  http.get(routes.category, { params });

export const getSingleCategory = (brochureId: string) =>
  http.get(routes.singleCategory(brochureId));

export const createCategory = (body: ICategoryBody) =>
  http.post(routes.category, body);

export const editeCategory = ({ id, ...body }: IEditCategoryBody) =>
  http.put(routes.singleCategory(id), body);

export const deleteCategory = (brochureId: string) =>
  http.delete(routes.singleCategory(brochureId));

// ---------------------------  Product  ------------------------------
export const getProducts = (params: IProductParams): Promise<IProduct[]> =>
  http.get(routes.product, { params });

export const getSingleProduct = (productId: string): Promise<IProduct> =>
  http.get(routes.singleProduct(productId));

export const createProduct = (body: IProductBody): Promise<IProduct> =>
  http.post(routes.product, body);

export const editeProduct = ({ id, ...body }: IEditProductBody): Promise<IProduct> =>
  http.put(routes.singleProduct(id), body);

export const productImages = ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) =>
  http.patch(routes.productImages(id), formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteProduct = (productId: string) =>
  http.delete(routes.singleProduct(productId));

// ---------------------------  File  ------------------------------
export const getFiles = (): Promise<any> => http.get(routes.file);

export const getSingleFile = (fileId: string) =>
  http.get(routes.singleFile(fileId));

export const createFile = (body: FormData): Promise<{ link: string }> =>
  http.post(routes.file, body, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const editeFile = ({
  id,
  formData,
}: {
  id: string;
  formData: FormData;
}) =>
  http.put(routes.singleFile(id), formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteFile = (fileId: string) =>
  http.delete(routes.singleFile(fileId));

// ---------------------------  Login ------------------------------
export const login = (body: ILoginBody): Promise<ILoginResponse> =>
  http.post(routes.login, body);

export const register = (body: IRegisterBody): Promise<IRegisterResponse> =>
  http.post(routes.register, body);
