import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {toggleCartHidden } from '../../redux/cart/cart.actions';
//import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropDownContainer, CartItems, CartDropButton, EmptyMessage} from './cart-dropdown.styles';
//import './cart-dropdown.styles.scss';


    const CartDropdown = ({cartItems, history, dispatch }) => (
        <CartDropDownContainer>
            <CartItems> 
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem key={ cartItem.id } item={cartItem} />
                ))
                ) :  (
                    <EmptyMessage> Your cart is empty</EmptyMessage>        
                )
               
            }
            </CartItems>
            <CartDropButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}
            > 
                GO TO CHECKOUT
            </CartDropButton>
        
        </CartDropDownContainer>
    )


 const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
 });

export default withRouter(connect(mapStateToProps)(CartDropdown));