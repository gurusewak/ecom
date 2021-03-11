import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Collection from '../collection/Collection'

export default class Shop extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
        <Route path={`${match.path}/:collectionID`} component={Collection}></Route>
      </div>
    )
  }
}


