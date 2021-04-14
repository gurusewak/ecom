import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import { selectIsCollectionLoaded } from '../../redux/shop/shop-selector'
import Collection from './Collection'



const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)
export default CollectionContainer;