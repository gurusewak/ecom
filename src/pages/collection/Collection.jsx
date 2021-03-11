import React, { Component } from 'react'
import { connect } from 'react-redux'
import './collection.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectCollection } from '../../redux/shop/shop-selector';

export class Collection extends Component {
  render() {
    const { collection } = this.props
    const { title, items } = collection
    return (
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map(item => <CollectionItem key={item.id} item={item}></CollectionItem>)}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Collection)
