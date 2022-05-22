import { Article } from "../../types";
import { ActionTypes, TypeKeys } from "../actions.constants";

export const productsState = {
  isLoading: true,
  error: null,
  articlesData: {
    totalArticles: 0,
    categoryName: "",
    articles: [],
    isCategoryLoading: false,
  },
  originalArticles: [],
  childrenCategories: [],
};

export const productsReducer = (state = productsState, action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.FETCH_ARTICLES_START:
      return {
        ...state,
        isLoading: true,
      };
    case TypeKeys.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        ...action.payload,
        originalArticles: action.payload.articlesData.articles,
        isLoading: false,
      };
    case TypeKeys.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case TypeKeys.FETCH_CATEGORY_ARTICLES_START:
      return {
        ...state,
        articlesData: {
          ...state.articlesData,
          isCategoryLoading: true,
        },
      };
    case TypeKeys.SEARCH_ARTICLES_DATA:
      return {
        ...state,
        articlesData: {
          ...state.articlesData,
          articles: state.originalArticles.filter((item: Article) => item.name.toLowerCase().includes(action.searchString.toLowerCase()))
        },
      };
    default:
      return state;
  }
};
