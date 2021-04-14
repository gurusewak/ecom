import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

export default class StripeButton extends Component {
  onToken = (token) => {
    const { price } = this.props;
    const priceForStripe = price * 100;
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful');
    }).catch(error => {
      console.log(JSON.parse(error));
    })
  }


  render() {
    const { price } = this.props;
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ITy8nLFWgDVzFk4dOR8e7H3UdJ7vyfWcPVaoNah18O9r5XjZ2zhbZQkOkrjAi9IGL7izQqw6vNJTguRzozBBVNO00TP7zGWou';

    return (
      <StripeCheckout
        label="Pay Now"
        name="E-com Ltd"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={this.onToken}
        stripeKey={publishableKey}
      />
    )
  }
}
