export const routes = {
  article: "/article",
  singleArticle: (singleArticleId: string) => `/brochure-type/${singleArticleId}`,
  brand: "/brand",
  singleBrand: (singleBrandId: string) => `/brochure-type/${singleBrandId}`,
  brochure: "/brochure",
  singleBrochure: (singleBrochureId: string) => `/brochure-type/${singleBrochureId}`,
  brochureType: "/brochure-type",
  singleBrochureType: (singleBrochureTypeId: string) => `/brochure-type/${singleBrochureTypeId}`,
  category: "/category",
  singleCategory: (singleCategoryId: string) => `/brochure-type/${singleCategoryId}`,
  product: "/product",
  singleProduct: (singleProductId: string) => `/brochure-type/${singleProductId}`,
  login: "/auth"
}