import React from 'react';
import './cart-item.scss'

export default function CartItem({ item: { name, price, imageUrl, quantity } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item"></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${price} x {quantity}</span>
      </div>
    </div>
  )
}
