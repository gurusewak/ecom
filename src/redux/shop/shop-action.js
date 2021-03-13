import {shopActionTypes} from'./shop-type';

export const updateCollection = (payload) => ({
  type: shopActionTypes.UPDATE_COLLECTION,
  payload
})
