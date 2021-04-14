import { userActionTypes } from './user-type';

const initialState = {
  currentUser: null
}

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {

    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null
      }

    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: payload
      }

    default:
      return state
  }
}


