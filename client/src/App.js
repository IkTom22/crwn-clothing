import React, {useEffect} from 'react';
import { Switch , Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//import { setCurrentUser } from './redux/user/users.actions';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
//import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
//import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/users.actions';

const App =({ checkUserSession, currentUser } ) =>{
  useEffect (() =>{
    checkUserSession()
  }, [checkUserSession]);
  
  return (
    <div>
    <Header />
      <Switch>
          <Route  exact path='/' component={ HomePage }/>
          <Route  path='/shop' component={ShopPage} />
          <Route  exact path='/checkout' component={CheckoutPage} />
          <Route  
            exact 
            path='/signIn' 
            render={()=>
              currentUser ? (
                <Redirect to= '/' />
              ): (
                  <SignInAndSignUpPage/>
              )
            } 
          />
          
      </Switch>
        
    </div>
  );
  
}
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  checkUserSession: () =>dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps )(App);
