import React, { Component } from 'react'
import { Route, Switch ,Redirect} from "react-router-dom";
import { auth , createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';

import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Checkout from "./pages/checkout/Checkout";
import Header from "./components/header/Header";
import {setCurrentUser} from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selector';

 class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot=>{
        this.props.setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          });
      })
    } else{
      this.props.setCurrentUser(userAuth);
    }
  });
}
  
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  render() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/signin" render={ () => 
          this.props.currentUser 
          ? 
          (<Redirect to='/'/>)
          :
           (<SignInSignUp/>)
          }
        >
        </Route>
      </Switch>
    </div>
  );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps =(dispatch) =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
