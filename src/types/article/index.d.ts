export interface IArticle {
  _id: string
  title: string;
  lang: ELanguage;
  content: string
  createdAt: Date;
  updatedAt: Date;
}