import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    // Stripe sees prce as cents so needs  x100
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HS77nJdG0uJzGfNll1XEQskcR6HGRPNrVk3ByEaHfDmVHwruxjoSstOQjfJCxry71oUxTYqgXlp2NioerrRXPL900Hv4ev07U';
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
            .then(response => {
            alert('Payment successful')
        })
            .catch(error =>{
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issue with your payment. Please make sure that you use the provided credit card'
                )
        })
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