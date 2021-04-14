import React from 'react'
import CollectionItem from './../collection-item/CollectionItem';
import { StyledPreview, StyledTitle, StyledCollectionPreview } from './style'

export default function CollectionPreview({ title, items }) {
  return (
    <StyledCollectionPreview>
      <StyledTitle>{title.toUpperCase()}</StyledTitle>
      <StyledPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </StyledPreview>
    </StyledCollectionPreview>
  );
}
