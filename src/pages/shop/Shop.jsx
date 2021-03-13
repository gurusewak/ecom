import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { convertCollectionsSnapShotToMap, firestore } from './../../firebase/firebase.utils'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import Collection from '../collection/Collection'
import { updateCollection } from '../../redux/shop/shop-action'
import WithSpinner from '../../components/with-spinner/WithSpinner'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection)
export class Shop extends Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      updateCollection(convertCollectionsSnapShotToMap(snapshot))
      this.setState({ loading: false });
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} ></CollectionOverviewWithSpinner>}></Route>
        <Route path={`${match.path}/:collectionID`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props} ></CollectionWithSpinner>}></Route>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collections => dispatch(updateCollection(collections))
})

export default connect(null, mapDispatchToProps)(Shop)
