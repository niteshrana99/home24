import { useLazyQuery } from "@apollo/client";
import React, { useContext } from "react";
import { useErrorHandler } from "react-error-boundary";
import { ActionTypes, TypeKeys } from "../Context/actions.constants";
import { AppContext } from "../Context/context";
import { GET_ARTICLES_DATA, GET_INITIAL_DATA } from "../queries/getArticlesQuery";
import { articlesDataMapper } from "../utils/utils";
import { initialDataVariable } from "../utils/utils.constants";

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  const [fetchInitialData] = useLazyQuery(GET_INITIAL_DATA);
  const [fetchCategoryData] = useLazyQuery(GET_ARTICLES_DATA);
  const errorHandler = useErrorHandler();

  if (!appContext) {
    throw new Error(
      "Use app Context hook must be used inside context provider"
    );
  }

  async function loadInitialData(
    dispatch: React.Dispatch<ActionTypes>,
    queryVariables = initialDataVariable
  ) {
    dispatch({ type: TypeKeys.FETCH_ARTICLES_START });
    try {
      const response = await fetchInitialData(queryVariables);
      const { data } = response;
      dispatch({
        type: TypeKeys.FETCH_ARTICLES_SUCCESS,
        payload: {
          articlesData: articlesDataMapper(data),
          childrenCategories: data?.categories[0]?.childrenCategories?.list,
        },
      });
    } catch (error) {
      dispatch({ type: TypeKeys.FETCH_ARTICLES_ERROR, error: new Error('Something went wrong') });
      errorHandler(error)
      console.log(error);
    }
  }

  async function loadCategoryArticles(
    dispatch: React.Dispatch<ActionTypes>,
    queryVariables = initialDataVariable
  ) {
    dispatch({ type: TypeKeys.FETCH_CATEGORY_ARTICLES_START });
    try {
      const response = await fetchCategoryData(queryVariables);
      const { data } = response;
      dispatch({
        type: TypeKeys.FETCH_ARTICLES_SUCCESS,
        payload: {
          articlesData: articlesDataMapper(data)
        },
      });
    } catch (error) {
      dispatch({ type: TypeKeys.FETCH_ARTICLES_ERROR, error: new Error('Something went wrong') });
      console.log(error);
    }
  }

  return {
    loadInitialData,
    loadCategoryArticles,
    appContext,
  };
};
