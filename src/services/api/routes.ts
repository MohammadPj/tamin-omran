export const routes = {
  article: "/article",
  singleArticle: (singleArticleId: string) => `/article/${singleArticleId}`,
  articleImage: (singleArticleId: string) => `/article/${singleArticleId}/image`,
  brand: "/brand",
  singleBrand: (singleBrandId: string) => `/brand/${singleBrandId}`,
  brochure: "/brochure",
  singleBrochure: (singleBrochureId: string) => `/brochure/${singleBrochureId}`,
  brochureFile: (singleBrochureId: string) => `/brochure/${singleBrochureId}/file`,
  brochureType: "/brochure-type",
  singleBrochureType: (singleBrochureTypeId: string) => `/brochure-type/${singleBrochureTypeId}`,
  category: "/category",
  singleCategory: (singleCategoryId: string) => `/category/${singleCategoryId}`,
  product: "/product",
  singleProduct: (singleProductId: string) => `/product/${singleProductId}`,
  productImages: (productId: string) => `/product/${productId}/image`,
  file: "/file",
  singleFile:(fileId: string) => `/file/${fileId}`,
  login: "/auth",
  register: "/register",
  user: '/user',
  singleUser: (userId: string) => `/user/${userId}`,
  engineNumber: "/engineNumber"
}