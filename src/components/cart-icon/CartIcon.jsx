import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './cart-icon.scss';
import { toggleCartHidden } from './../../redux/cart/cart-actions';
import { selectCartItemsCount } from './../../redux/cart/cart-selector'

export class CartIcon extends Component {
  render() {
    return (
      <div className="cart-icon" onClick={this.props.toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">{this.props.itemCount}</span>
      </div>
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
