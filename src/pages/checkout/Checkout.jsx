import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart-selector'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeButton from '../../components/stripe-button/StripeButton';

export const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(
          cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        )
      }
      <div className="total">Total:  ${total}</div>
      <StripeButton price={total}></StripeButton>
      <div className="credit-card-warning">Please use this test VISA card details for payments
        <div>Card number 4242 4242 4242 4242 --Exp: any date(mm/yy) in future --CVV: any 3 digits</div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
}
)

export default connect(mapStateToProps)(Checkout)
