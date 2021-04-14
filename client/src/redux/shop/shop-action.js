import {shopActionTypes} from'./shop-type';

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = collectionsMap=>({
  type:shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload:collectionsMap
})

export const fetchCollectionFailure = errorMessage=>({
  type:shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload:errorMessage
})
