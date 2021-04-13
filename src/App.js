import React, { useEffect } from 'react'
import { Route, Switch ,Redirect} from "react-router-dom";

import './App.css';
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Checkout from "./pages/checkout/Checkout";
import Header from "./components/header/Header";
import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-action';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

 const App =({checkUserSession,currentUser})=> {
  
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/signin" render={ () => 
          currentUser 
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

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps=(dispatch)=>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);