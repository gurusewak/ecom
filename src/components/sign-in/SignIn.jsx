import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from './../form-input/FormInput';
import CustomButton from "./../custom-button/CustomButton";
import './sign-in.scss';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user-action';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })
  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  }
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an acocunt</h2>
      <span>Sign with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput onChange={handleChange} name="email" value={email} type="email" required></FormInput>
        <label>Email</label>
        <FormInput onChange={handleChange} name="password" value={password} type="password" required></FormInput>
        <label>Password</label>
        <div className="buttons">
          <CustomButton type="submit" value="Submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} value="Submit" isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);