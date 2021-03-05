import React, { Component } from 'react'
import Menuitem from "./../menu-item/Menuitem";
export default class Directory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
          size: 'small'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
          size: 'small'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
          size: 'small'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
          size: 'large'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
          size: 'large'
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <Menuitem key={id} title={title} imageUrl={imageUrl} size={size}></Menuitem>
        ))}
      </div>
    )
  }
}
