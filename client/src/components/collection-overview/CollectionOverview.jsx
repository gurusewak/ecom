import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop-selector';
import { StyledCollectionOverview } from './style'

export class CollectionOverview extends Component {
  render() {
    const { collections } = this.props;
    return (
      <StyledCollectionOverview>
        {collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps}></CollectionPreview>)}
      </StyledCollectionOverview>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
