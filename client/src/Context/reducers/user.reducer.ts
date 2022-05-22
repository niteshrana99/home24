import { Article } from "../../types";
import { ActionTypes, TypeKeys } from "../actions.constants";

export const initialUserState = {
  cart: {
    items: [],
    count: 0,
  },
  wishList: {
    items: [],
    count: 0,
  },
};

export const userReducer = (state = initialUserState, action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.ADD_TO_CART:
      return {
        ...state,
        cart: {
          items: [...state.cart.items, action.payload],
          count: state.cart.items.length + 1,
        },
      };
    case TypeKeys.REMOVE_FROM_CART:
      return {
        ...state,
        cart: {
          items: state.cart.items.filter(
            (item: Article) => item.name !== action.payload.name
          ),
          count: state.cart.items.length - 1,
        },
      };
    case TypeKeys.ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: {
          items: [...state.wishList.items, action.payload],
          count: state.wishList.items.length + 1,
        },
      };
    case TypeKeys.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: {
          items: state.wishList.items.filter(
            (item: Article) => item.name !== action.payload.name
          ),
          count: state.wishList.items.length - 1,
        },
      };
    default:
      return state;
  }
};
