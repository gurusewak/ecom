import React, { Component } from 'react'
import FormInput from './../form-input/FormInput';
import CustomButton from "./../custom-button/CustomButton";
import './sign-in.scss';
import { signInWithGoogle } from './../../firebase/firebase.utils'


export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = (event) => {
    event.prevenDefault();
    this.setState({ email: '', password: '' })
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an acocunt</h2>
        <span>Sign with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput onChange={this.handleChange} name="email" value={this.state.email} type="email" required></FormInput>
          <label>Email</label>
          <FormInput onChange={this.handleChange} name="password" value={this.state.password} type="password" required></FormInput>
          <label>Password</label>
          <div className="buttons">
            <CustomButton type="submit" value="Submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} value="Submit" isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
