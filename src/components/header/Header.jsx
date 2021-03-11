import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.scss';
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import CartIcon from "./../cart-icon/CartIcon";
import CartDropdown from './../cart-dropdown/CartDropdown'
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selector';

export function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <div className="option">
          <Link to="/shop">
            Shop
          </Link>
        </div>
        <div className="option">
          <Link to="/">
            Contact
          </Link>
        </div>
        <div>
          {
            currentUser ?
              <div className="option" onClick={() => auth.signOut()}>
                Sign Out
              </div>
              :
              <Link to="/signin">
                Sign In
              </Link>
          }
        </div>
        <CartIcon></CartIcon>
      </div>
      {
        hidden ?
          null :
          <CartDropdown></CartDropdown>
      }

    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden

})

export default connect(mapStateToProps)(Header);
