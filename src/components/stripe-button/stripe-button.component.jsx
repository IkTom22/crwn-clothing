import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    // Stripe sees prce as cents so needs  x100
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HS77nJdG0uJzGfNll1XEQskcR6HGRPNrVk3ByEaHfDmVHwruxjoSstOQjfJCxry71oUxTYqgXlp2NioerrRXPL900Hv4ev07U';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Siccessful');
    }
    //https://github.com/azmenak/react-stripe-checkout
    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Closing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;