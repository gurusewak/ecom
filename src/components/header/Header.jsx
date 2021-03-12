import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './style';
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import CartIcon from "./../cart-icon/CartIcon";
import CartDropdown from './../cart-dropdown/CartDropdown'
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './style';

export function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/"><Logo></Logo></LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          Shop
        </OptionLink>
        <div>
          {
            currentUser ?
              <OptionLink as="div" onClick={() => auth.signOut()}>
                Sign Out
              </OptionLink>
              :
              <Link to="/signin">
                Sign In
              </Link>
          }
        </div>
        <CartIcon></CartIcon>
      </OptionsContainer>
      {
        hidden ?
          null :
          <CartDropdown></CartDropdown>
      }

    </HeaderContainer>
  )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden

})

export default connect(mapStateToProps)(Header);
