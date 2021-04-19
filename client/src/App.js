import React, { useEffect,lazy,Suspense } from 'react'
import { Route, Switch ,Redirect} from "react-router-dom";

import './App.css';

import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-action';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Spinner from './components/spinner/Spinner';

const Homepage = lazy(()=>import('./pages/homepage/Homepage'));
const Shop = lazy(()=>import('./pages/shop/Shop'));
const SignInSignUp = lazy(()=>import('./pages/sign-in-and-sign-up/SignInSignUp'));
const Checkout = lazy(()=>import('./pages/checkout/Checkout'));
const Header = lazy(()=>import('./components/header/Header'));

const App =({checkUserSession,currentUser})=> {
  
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

  return (
    <div className="App">
      <Suspense fallback={<Spinner></Spinner>}>
        <Header></Header>
      </Suspense>
      <Switch>
        <Suspense fallback={<Spinner></Spinner>}>
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
        </Suspense>
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