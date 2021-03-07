import React, { Component } from 'react'
import { Route,Switch } from "react-router-dom";
import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Header from "./components/header/Header";
import { auth } from './firebase/firebase.utils';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  render() {
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/signin" component={SignInSignUp}></Route>
      </Switch>
    </div>
  );
  }
}
