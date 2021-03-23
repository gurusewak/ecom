import React from 'react'
import { connect } from 'react-redux'

import { StyledRemoveItem, StyledValue, StyledArrow, StyledQuantity, StyledSharedSpan, StyledImage, StyledImageContainer, StyledCheckoutItem } from './style';
import { clearItemFromCart, addItem, removeItem } from './../../redux/cart/cart-actions'

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <StyledCheckoutItem>
      <StyledImageContainer>
        <StyledImage src={imageUrl} alt="item"></StyledImage>
      </StyledImageContainer>
      <StyledSharedSpan>{name}</StyledSharedSpan>
      <StyledQuantity>
        <StyledArrow onClick={() => removeItem(cartItem)}>&#10094;</StyledArrow>
        <StyledValue>{quantity}</StyledValue>
        <StyledArrow onClick={() => addItem(cartItem)}>&#10095;</StyledArrow>
      </StyledQuantity >
      <StyledSharedSpan>${price}</StyledSharedSpan>
      <StyledRemoveItem onClick={() => clearItem(cartItem)}>&#10005;</StyledRemoveItem>
    </StyledCheckoutItem >
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
