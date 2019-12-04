import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePayments = () => {
  return (
    <StripeCheckout
      amount={500}
      token={token => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
  )
};

export default StripePayments;