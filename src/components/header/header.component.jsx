import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser }from '../../redux/user/user.selectors';
//import { Link } from 'react-router-dom';
import { connect }from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

//import './header.styles.scss';
import {
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer >
        <LogoContainer to="/" >
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to = './shop'  >
                SHOP
            </OptionLink>
            <OptionLink to = './contact'  >
                CONTACT
            </OptionLink>
            { 
                currentUser ?
                <OptionLink  as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
                : 
                <OptionLink to='./signIn' >SIGN IN</OptionLink>
            }
            
            <CartIcon />
        </OptionsContainer>

        { hidden ? null : <CartDropdown />}
    </HeaderContainer>
)

// this naming can be anything but mapStateToProps is standard with redux codebase
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartItems(state)
// })
const mapStateToProps =createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);