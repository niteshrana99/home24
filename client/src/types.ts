export type Category = {
  name: string
  categoryArticles: CategoryArticle
  articleCount: number
  childrenCategories: ChildCategory
}

export type Article = {
  name:  string
  variantName: string
  prices: Prices
  images: Image[]
}

export type ChildCategory = {
  list: Array<{
    name: string
    urlPath: string
  }>
}

export type Prices = {
  currency: string
  regular: {
    value: number
  }
}

export type Image = {
  path: string
}

export type CategoryArticle = {
  articles: Article[]
}

export interface IMapperType {
  categories:Array<{
    articleCount: number,
    name: string,
    categoryArticles: CategoryArticle
  }>
}

export type sidebarMapObject = {
    name: string,
    urlPath: string,
  }
  
export type sidebarProps = {
    childrenCategories: sidebarMapObject[]
}

export type SuccessPayloadType  = {
  articlesData : { totalArticles: number; categoryName: string; articles: Article[]; },
  childrenCategories?: sidebarProps
}
