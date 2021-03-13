import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

export const selectShop = state => state.shop;
  
export const selectShopCollections = createSelector(
  [selectShop],
  (shop)=>shop.collections
)
export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
    collections => collections?Object.keys(collections).map(key=>collections[key]):[]
)
export const selectCollection = memoize ((collectionUrlParam) => createSelector(
  [selectShopCollections],
  collections => collections?collections[collectionUrlParam]:null
))