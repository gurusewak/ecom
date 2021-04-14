import React from 'react'
import { connect } from 'react-redux'
import { StyledCollectionItem, StyledImage, CollectionFooter, StyledPrice, StyledName, StyledCustomButton } from './style'
import { addItem } from './../../redux/cart/cart-actions';


export function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <StyledCollectionItem>
      <StyledImage imageUrl={imageUrl}></StyledImage>
      <CollectionFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>${price}</StyledPrice>
      </CollectionFooter>
      <StyledCustomButton inverted onClick={() => addItem(item)}>Add to cart</StyledCustomButton>
    </StyledCollectionItem>
  )
}


const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
