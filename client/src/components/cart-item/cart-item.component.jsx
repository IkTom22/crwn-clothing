import React from 'react';
import {CartItemContainer, ItemDetailsContainer, ItemImage} from './cart-item.styles';
//import './cart-item.styles.scss';


const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <span> {name}</span>
            <span> 
                { quantity} x  ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;

