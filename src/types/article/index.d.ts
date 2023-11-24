export interface IArticle {
  id: number
  title: string;
  description?: string;
  image?: string;
  lastUpdate: Date
  admin: any
}