export const routes = {
  article: "/article",
  singleArticle: (singleArticleId: string) => `/article/${singleArticleId}`,
  brand: "/brand",
  singleBrand: (singleBrandId: string) => `/brand/${singleBrandId}`,
  brochure: "/brochure",
  singleBrochure: (singleBrochureId: string) => `/brochure/${singleBrochureId}`,
  brochureType: "/brochure-type",
  singleBrochureType: (singleBrochureTypeId: string) => `/brochure-type/${singleBrochureTypeId}`,
  category: "/category",
  singleCategory: (singleCategoryId: string) => `/category/${singleCategoryId}`,
  product: "/product",
  singleProduct: (singleProductId: string) => `/product/${singleProductId}`,
  login: "/auth"
}