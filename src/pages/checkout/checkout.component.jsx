import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
    CheckoutPageContainer,
    HeaderContainer,
    HeaderBlock,
    TotalContainer,
    TestWarning
} from './checkout.styles';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
//import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer className= 'checkout-page'>
        <HeaderContainer>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </HeaderContainer>
        { cartItems.map(cartItem => 
                <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
        )}
        <TotalContainer>
            <span>TOTAL: ${total}</span>
         </TotalContainer>
         <TestWarning>
            *Please use the following test credit card for payments
            <br /> 
            4242 4242 4242 4242 -Exp 01/21 -CVV 123
        </TestWarning>
         <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);