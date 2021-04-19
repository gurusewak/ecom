import React from 'react';
import { StyledSpan, StyledItemDetails, StyledImage, StyledCartItem } from './style'

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <StyledCartItem>
      <StyledImage src={imageUrl} alt="item"></StyledImage>
      <StyledItemDetails>
        <StyledSpan>{name}</StyledSpan>
        <StyledSpan>${price} x {quantity}</StyledSpan>
      </StyledItemDetails>
    </StyledCartItem>
  )
}

export default React.memo(CartItem);