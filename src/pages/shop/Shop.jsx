import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchCollectionStart } from '../../redux/shop/shop-action'
import CollectionOverviewContainer from '../../components/collection-overview/CollectionOverviewContainer';
import CollectionContainer from '../collection/CollectionContainer'

export class Shop extends Component {

  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
        <Route path={`${match.path}/:collectionID`} component={CollectionContainer}></Route>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(Shop)
