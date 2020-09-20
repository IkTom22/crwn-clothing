import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden} from '../../redux/cart/cart.actions';
//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';
//import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) =>(
    <CartIconContainer  onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCount > {itemCount} </ItemCount>
    </CartIconContainer>

)
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});
export default connect(
    mapStateToProps,
     mapDispatchToProps
     )(CartIcon);