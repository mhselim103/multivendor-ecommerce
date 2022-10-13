// add
// import { cartActionTypes } from "redux/types";
// remove
// clear

import { cartActionTypes } from "../types";

// { type: "add_To_cart", payload: [] }
interface addToCart {
  type: cartActionTypes.ADD_TO_CART;
  payload: IProduct;
}
interface removeFromCart {
  type: cartActionTypes.REMOVE_FROM_CART;
  payload: string;
}
interface clearCart {
  type: cartActionTypes.CLEAR_CART;
}

export const add_to_cart = (payload: IProduct): addToCart => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: payload,
  };
};
export const remove_from_cart = (id: string): removeFromCart => {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};
export const clear_cart = (): clearCart => {
  return {
    type: cartActionTypes.CLEAR_CART,
  };

  //as const is used for ninja technique
};

type x = ReturnType<typeof add_to_cart>;
type y = ReturnType<typeof remove_from_cart>;
type z = ReturnType<typeof clear_cart>;

export type cartActionType = x | y | z;
