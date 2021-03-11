import {cartActionTypes} from'./cart-type';
import { addItemsToCart,updateItemsInCart ,removeItemsInCart} from "./cart-util";

const initialState = {
hidden: true,
cartItems:[]
}

export default function cartReducer (state = initialState, { type,payload }) {
  switch (type) {

  case cartActionTypes.TOGGLE_CART_HIDDEN:
    return { 
      ...state, 
      hidden:!state.hidden }
      
  case cartActionTypes.ADD_ITEM:
    return { 
      ...state, 
      cartItems:addItemsToCart(state.cartItems,payload) }
        
  case cartActionTypes.CLEAR_ITEM_FROM_CART:
    return { 
      ...state, 
      cartItems:updateItemsInCart(state.cartItems,payload) }

  case cartActionTypes.REMOVE_ITEM_FROM_CART:
    return { 
      ...state, 
      cartItems:removeItemsInCart(state.cartItems,payload) }

  default:
    return state
  }
}
