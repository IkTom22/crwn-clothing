import React from 'react';
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


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async e =>{
        e.preventDefault()
        const { emailSignInStart} = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password)
        
    }
handleChange = (e) =>{
    const { value, name} = e.target;
    this.setState({[name]: value})
}
    render(){
        const { googleSignInStart} = this.props;
        
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"   
                        type="email" 
                        value={this.state.email} 
                        label="email"
                        handleChange={this.handleChange}
                        required 
                    />
             
                    <FormInput
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label="password"
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () =>dispatch(googleSignInStart()),
    emailSignInStart: (email, password)=> dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);