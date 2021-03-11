export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if(existingCartItems){
    return cartItems.map(cartItem=>
      cartItem.id === cartItemToAdd.id
      ?
      {...cartItem, quantity:cartItem.quantity+1}
      :
      cartItem
      )
  }

  return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const updateItemsInCart = (cartItems, newItem) => {
  const updatedCartItems = cartItems.filter(
    cartItem => cartItem.id !== newItem.id
  );

  return updatedCartItems;
}

export const removeItemsInCart = (cartItems, removedItem) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === removedItem.id
  );
  
  if(existingCartItems.quantity===1){
    return  cartItems.filter(
      cartItem => cartItem.id !== removedItem.id
    );

  }
  return cartItems.map( cartItem=>
    cartItem.id===removedItem.id
    ?
    {...cartItem, quantity:cartItem.quantity-1}
    :
    cartItem
  );
}
