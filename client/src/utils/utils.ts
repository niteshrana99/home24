import { IMapperType } from "../types";

const intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];

export const formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

export const articlesDataMapper = (data: IMapperType) => {
    return {
      totalArticles: data.categories[0].articleCount,
      categoryName: data.categories[0].name,
      articles: data.categories[0].categoryArticles.articles,
    }
}