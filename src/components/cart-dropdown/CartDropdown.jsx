import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomButton from './../custom-button/CustomButton'
import { StyledEmptyMessage, StyledCartItems, StyledCartDropdown } from './style';
import CartItem from './../cart-item/CartItem';
import { selectCartItems } from './../../redux/cart/cart-selector'
import { toggleCartHidden } from './../../redux/cart/cart-actions'
import { withRouter } from 'react-router-dom';

export class CartDropdown extends Component {
  render() {
    const { cartItems, history, toggleCartHidden } = this.props;
    return (
      <StyledCartDropdown>
        <StyledCartItems>
          {
            cartItems.length
              ?
              (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>))
              :
              (<StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>)
          }
          <CustomButton onClick={() => { history.push('/checkout'); toggleCartHidden() }}> Go To Checkout</CustomButton>
        </StyledCartItems>
      </StyledCartDropdown>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
