import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import { StyledShoppingIcon, StyledItemCount, StyledCartIcon } from './style';
import { toggleCartHidden } from './../../redux/cart/cart-actions';
import { selectCartItemsCount } from './../../redux/cart/cart-selector'

export class CartIcon extends Component {
  render() {
    return (
      <StyledCartIcon onClick={this.props.toggleCartHidden}>
        <StyledShoppingIcon><ShoppingIcon></ShoppingIcon></StyledShoppingIcon>
        <StyledItemCount>{this.props.itemCount}</StyledItemCount>
      </StyledCartIcon>
    )
  }
}
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
