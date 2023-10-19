
interface IProductSpecifications {
  title: string;
  value: string
}

export interface IProduct {
  name: string,
  uniqueCode: string,
  description: string;
  specifications?: IProductSpecifications[]
  images?: string[]
}