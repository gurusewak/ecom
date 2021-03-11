import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop-selector'

export class CollectionOverview extends Component {
  render() {
    const { collections } = this.props;
    return (
      <div className="collections-overview">
        {collections.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps}></CollectionPreview>)}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
