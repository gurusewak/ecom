import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menuitem from "./../menu-item/Menuitem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./../../redux/directory/directory-selector";

export class Directory extends Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
          <Menuitem key={id} {...otherProps}></Menuitem>
        ))}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

