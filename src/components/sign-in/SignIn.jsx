import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormInput from './../form-input/FormInput';
import CustomButton from "./../custom-button/CustomButton";
import './sign-in.scss';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user-action';


export class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password)
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type="button" onClick={googleSignInStart} value="Submit" isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);