import  {shopActionTypes} from "./shop-type"
const initialState = {
 collections: null
}

export default function shopReducer (state = initialState, { type, payload }) {
  switch (type) {

  case shopActionTypes.UPDATE_COLLECTION:
  return { 
    ...state,
    collections:payload
  }
  default:
    return state
  }
}
