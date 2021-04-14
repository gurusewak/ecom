import React from 'react';
import { withRouter } from "react-router-dom";
import './menu-item.scss';

const Menuitem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item`}>
      <div className="background-image"
        style={
          { backgroundImage: `url(${imageUrl})` }
        }>
      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">Shop now</span>
      </div>
    </div >
  );
}
export default withRouter(Menuitem);