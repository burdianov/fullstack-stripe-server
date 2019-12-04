import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripePayments = () => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={token => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    >
      <button className="btn">
        Add Credits
      </button>
    </StripeCheckout>
  )
};

export default StripePayments;