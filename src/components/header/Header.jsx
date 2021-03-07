import React from 'react';
import { Link } from "react-router-dom";
import './header.scss';
import { ReactComponent as Logo } from "./../../assets/crown.svg";
import { auth } from '../../firebase/firebase.utils';

export default function Header({ currentUser }) {
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
      </div>
    </div>
  )
}
