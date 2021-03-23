import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menuitem from "./../menu-item/Menuitem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "./../../redux/directory/directory-selector";
import { StyledDirectoryMenu } from './style';

export class Directory extends Component {
  render() {
    const { sections } = this.props;
    return (
      <StyledDirectoryMenu>
        {sections.map(({ id, ...otherProps }) => (
          <Menuitem key={id} {...otherProps}></Menuitem>
        ))}
      </StyledDirectoryMenu>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

