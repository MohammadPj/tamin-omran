import { useMutation, useQuery } from "@tanstack/react-query";
import {
  articleImage,
  brochureFile,
  createArticle,
  createBrand,
  createBrochure,
  createBrochureType,
  createCategory,
  createFile,
  createProduct,
  deleteArticle,
  deleteBrand,
  deleteBrochure,
  deleteBrochureType,
  deleteCategory,
  deleteFile,
  deleteProduct, deleteUser,
  editeArticle,
  editeBrand,
  editeBrochure,
  editeBrochureType,
  editeCategory,
  editeFile,
  editeProduct,
  getArticles,
  getBrands,
  getBrochures,
  getBrochureTypes,
  getCategories,
  getFiles,
  getProducts,
  getSingleArticle,
  getSingleBrand,
  getSingleBrochure,
  getSingleBrochureType,
  getSingleCategory,
  getSingleFile,
  getSingleProduct,
  getUsers,
  login,
  productImages,
  register,
} from "~/services/api/services";
import {
  IArticleParams,
  IBrandParams,
  IBrochureParams,
  IBrochureTypeParams,
  ICategoryParams,
  IProductParams,
  IUserParams,
} from "~/services/api/type";

// ---------------------------  BrochureTypes  ------------------------------
export const useGetBrochureTypes = (params: IBrochureTypeParams) =>
  useQuery({
    queryKey: ["BrochureTypes", params],
    queryFn: () => getBrochureTypes(params),
    enabled: !!params.lang,
    staleTime: 15 * 60 * 1000,
  });

export const useGetSingleBrochureType = (brochureTypeId: string) =>
  useQuery({
    queryKey: ["SingleBrochureType"],
    queryFn: () => getSingleBrochureType(brochureTypeId),
  });

export const useCreateBrochureType = () =>
  useMutation({
    mutationKey: ["BrochureType"],
    mutationFn: createBrochureType,
  });

export const useEditeBrochureType = () =>
  useMutation({ mutationKey: ["BrochureType"], mutationFn: editeBrochureType });

export const useDeleteBrochureType = () =>
  useMutation({
    mutationKey: ["BrochureType"],
    mutationFn: deleteBrochureType,
  });

// ---------------------------  Brochure ------------------------------
export const useGetBrochures = (params: IBrochureParams) =>
  useQuery({
    queryKey: ["Brochures", params],
    queryFn: () => getBrochures(params),
    staleTime: 15 * 60 * 1000,
  });

export const useGetSingleBrochure = (brochureId: string) =>
  useQuery({
    queryKey: ["SingleBrochure", brochureId],
    queryFn: () => getSingleBrochure(brochureId),
  });

export const useCreateBrochure = () =>
  useMutation({ mutationKey: ["Brochures"], mutationFn: createBrochure });

export const useEditeBrochure = () =>
  useMutation({ mutationKey: ["Brochures"], mutationFn: editeBrochure });

export const useAssignBrochureFile = () =>
  useMutation({ mutationKey: ["brochure-file"], mutationFn: brochureFile });

export const useDeleteBrochure = () =>
  useMutation({ mutationKey: ["Brochures"], mutationFn: deleteBrochure });

// ---------------------------  Article ------------------------------
export const useGetArticles = (params: IArticleParams) =>
  useQuery({
    queryKey: ["Articles", params],
    queryFn: () => getArticles(params),
    staleTime: 15 * 60 * 1000,
  });

export const useGetSingleArticle = (articleId: string) =>
  useQuery({
    queryKey: ["SingleArticle", articleId],
    queryFn: () => getSingleArticle(articleId),
  });

export const useCreateArticle = () =>
  useMutation({ mutationKey: ["Article"], mutationFn: createArticle });

export const useEditeArticle = () =>
  useMutation({ mutationKey: ["Article"], mutationFn: editeArticle });

export const useAssignArticleImage = () =>
  useMutation({ mutationKey: ["article-image"], mutationFn: articleImage });

export const useDeleteArticle = () =>
  useMutation({ mutationKey: ["Article"], mutationFn: deleteArticle });

// ---------------------------  Brand ------------------------------
export const useGetBrands = (params: IBrandParams) =>
  useQuery({
    queryKey: ["Brands", params],
    queryFn: () => getBrands(params),
    staleTime: 15 * 60 * 1000,
  });

export const useGetSingleBrand = (brandId: string) =>
  useQuery({
    queryKey: ["SingleBrand", brandId],
    queryFn: () => getSingleBrand(brandId),
  });

export const useCreateBrand = () =>
  useMutation({ mutationKey: ["Brand"], mutationFn: createBrand });

export const useEditeBrand = () =>
  useMutation({ mutationKey: ["Brand"], mutationFn: editeBrand });

export const useDeleteBrand = () =>
  useMutation({ mutationKey: ["Brand"], mutationFn: deleteBrand });

// ---------------------------  Category ------------------------------
export const useGetCategories = (params: ICategoryParams) =>
  useQuery({
    queryKey: ["Categories", params],
    queryFn: () => getCategories(params),
    staleTime: 15 * 60 * 1000,
  });

export const useGetSingleCategory = (categoryId: string) =>
  useQuery({
    queryKey: ["SingleCategory", categoryId],
    queryFn: () => getSingleCategory(categoryId),
  });

export const useCreateCategory = () =>
  useMutation({ mutationKey: ["Category"], mutationFn: createCategory });

export const useEditeCategory = () =>
  useMutation({ mutationKey: ["Category"], mutationFn: editeCategory });

export const useDeleteCategory = () =>
  useMutation({ mutationKey: ["Category"], mutationFn: deleteCategory });

// ---------------------------  Product ------------------------------
export const useGetProducts = (params: IProductParams) =>
  useQuery({
    queryKey: ["Products", params],
    queryFn: () => getProducts(params),
    staleTime: 15 * 60 * 1000,
  });

export const useGetSingleProduct = (productId: string) =>
  useQuery({
    queryKey: ["SingleProduct", productId],
    queryFn: () => getSingleProduct(productId),
  });

export const useCreateProduct = () =>
  useMutation({ mutationKey: ["Product"], mutationFn: createProduct });

export const useEditeProduct = () =>
  useMutation({ mutationKey: ["Product"], mutationFn: editeProduct });

export const useAssignProductImage = () =>
  useMutation({ mutationKey: ["Product-image"], mutationFn: productImages });

export const useDeleteProduct = () =>
  useMutation({ mutationKey: ["Product"], mutationFn: deleteProduct });

// ---------------------------  File  ------------------------------
export const useGetFiles = () =>
  useQuery({
    queryKey: ["Files"],
    queryFn: () => getFiles(),
  });

export const useGetSingleFile = (fileId: string) =>
  useQuery({
    queryKey: ["SingleFile", fileId],
    queryFn: () => getSingleFile(fileId),
  });

export const useCreateFile = () =>
  useMutation({ mutationKey: ["File"], mutationFn: createFile });

export const useEditeFile = () =>
  useMutation({ mutationKey: ["File"], mutationFn: editeFile });

export const useDeleteFile = () =>
  useMutation({ mutationKey: ["File"], mutationFn: deleteFile });

export const useLogin = () =>
  useMutation({ mutationKey: ["login"], mutationFn: login });

export const useRegisterMutation = () =>
  useMutation({ mutationKey: ["register"], mutationFn: register });

export const useGetUsers = (params?: IUserParams) =>
  useQuery({ queryKey: ["users"], queryFn: () => getUsers(params) });

export const useDeleteUser = () => useMutation({mutationKey: ['users'], mutationFn: deleteUser})