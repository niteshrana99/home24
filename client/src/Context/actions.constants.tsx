import { Article, SuccessPayloadType } from "../types"

export enum TypeKeys {
    FETCH_ARTICLES_START = 'FETCH_ARTICLES_START',
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
    SEARCH_ARTICLES_DATA = 'SEARCH_ARTICLES_DATA',
    FETCH_CATEGORY_ARTICLES_START= 'FETCH_CATEGORY_ARTICLES_START',
    ADD_TO_CART= 'ADD_TO_CART',
    REMOVE_FROM_CART= 'REMOVE_FROM_CART',
    ADD_TO_WISHLIST = 'ADD_TO_WISHLIST',
    REMOVE_FROM_WISHLIST= 'REMOVE_FROM_WISHLIST',
}

export interface FetchArticlesStartAction {
    type: TypeKeys.FETCH_ARTICLES_START
}

export interface FetchArticlesSuccessAction {
    type: TypeKeys.FETCH_ARTICLES_SUCCESS,
    payload: SuccessPayloadType
}

export interface FetchArticlesErrorAction {
    type: TypeKeys.FETCH_ARTICLES_ERROR,
    error: Error
}

export interface FetchCategoryAction {
    type: TypeKeys.FETCH_CATEGORY_ARTICLES_START,
}

export interface AddToCartAction {
    type: TypeKeys.ADD_TO_CART,
    payload: Article
}

export interface RemoveFromCartAction {
    type: TypeKeys.REMOVE_FROM_CART,
    payload: Article
}

export interface RemoveFromWishlistAction {
    type: TypeKeys.REMOVE_FROM_WISHLIST,
    payload: Article
}

export interface AddToWishListAction {
    type: TypeKeys.ADD_TO_WISHLIST,
    payload: Article
}

export interface SearchAction {
    type: TypeKeys.SEARCH_ARTICLES_DATA,
    searchString: string
}

export type ActionTypes = 
    SearchAction |
    FetchArticlesStartAction |
    FetchArticlesSuccessAction |
    FetchArticlesErrorAction |
    FetchCategoryAction |
    AddToCartAction | 
    AddToWishListAction | RemoveFromCartAction | RemoveFromWishlistAction;