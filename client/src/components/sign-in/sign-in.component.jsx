import React, { useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {googleSignInStart, emailSignInStart } from '../../redux/user/users.actions';
import {
    SignInContainer,
    SignInTitle,
    SignInButton
} from './sign-in.styles';
//import './sign-in.styles.scss';


const SignIn =({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const { email, password } = userCredentials;
    
    const handleSubmit = async e =>{
        e.preventDefault()
        emailSignInStart(email, password)
    }
    const handleChange = (e) =>{
        const { value, name} = e.target;
        setCredentials({...userCredentials, [name]: value})
    }

    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"   
                    type="email" 
                    value={email} 
                    label="email"
                    handleChange={handleChange}
                    required 
                />
            
                <FormInput
                    name="password" 
                    type="password" 
                    value={password} 
                    label="password"
                    handleChange={handleChange}
                    required 
                />
                <SignInButton>
                    <CustomButton type="submit" >Sign in</CustomButton>
                    <CustomButton 
                        type="button" 
                        onClick={googleSignInStart} 
                        isGoogleSignIn
                    >
                        {''}
                        Sign in with Google {''}
                    </CustomButton>
                </SignInButton>
            </form>
        </SignInContainer>
    )
    
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () =>dispatch(googleSignInStart()),
    emailSignInStart: (email, password)=> dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);