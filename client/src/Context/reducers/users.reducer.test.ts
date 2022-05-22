import { TypeKeys } from "../actions.constants";
import { initialUserState, userReducer } from "./user.reducer";

describe('User Reducer', () => {
    const data = {
        name: "Test Article",
        variantName: "Test Article Variant Name",
        prices: {
          currency: "EUR",
          regular: {
            value: 159999,
          },
        },
        images: [
          {
            path: "https://www.test.com",
          },
        ],
      };
    
    it('Should set the user Reducer state when ADD_TO_CART action is caled', () => {
        const state = userReducer(initialUserState, {type: TypeKeys.ADD_TO_CART, payload: data})
        expect(state.cart.items.length).toEqual(1)
    });

    it('Should set the user Reducer state when ADD_TO_WISHLIST action is caled', () => {
        const state = userReducer(initialUserState, {type: TypeKeys.ADD_TO_WISHLIST, payload: data})
        expect(state.wishList.items.length).toEqual(1)
    });

    it('Should set the user Reducer state when REMOVE_FROM_CART action is caled', () => {
        const state = userReducer(initialUserState, {type: TypeKeys.REMOVE_FROM_CART, payload: data})
        expect(state.cart.items.length).toEqual(0)
    });

    it('Should set the user Reducer state when ADD_TO_WISHLIST action is caled', () => {
        const state = userReducer(initialUserState, {type: TypeKeys.REMOVE_FROM_WISHLIST, payload: data})
        expect(state.wishList.items.length).toEqual(0)
    });

})