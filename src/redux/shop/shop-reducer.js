import  {shopActionTypes} from "./shop-type"
const initialState = {
 collections: null,
 isFetching:false,
 errorMessage: undefined
}

export default function shopReducer (state = initialState, { type, payload }) {
  switch (type) {

  case shopActionTypes.FETCH_COLLECTION_START:
  return { 
    ...state,
    isFetching:true
  }

  case shopActionTypes.FETCH_COLLECTION_SUCCESS:
  return { 
    ...state,
    isFetching:false,
    collections:payload
  }  

  case shopActionTypes.FETCH_COLLECTION_FAILURE:
  return { 
    ...state,  
    isFetching:false,
    errorMessage:payload
  }
  
  default:
    return state
  }
}
