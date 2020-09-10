import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser }from '../../redux/user/user.selectors';
import { Link } from 'react-router-dom';
import { connect }from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to="/"  className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to = './shop' className='option' >
                SHOP
            </Link>
            <Link to = './contact' className='option' >
                CONTACT
            </Link>
            { 
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                : 
                <Link to='./signIn' className='option'>SIGN IN</Link>
            }
            
            <CartIcon />
        </div>

        { hidden ? null : <CartDropdown />}
    </div>
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