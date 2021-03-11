import { userActionTypes } from './user-type';

const initialState = {
  currentUser: null
}

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {

    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }

    default:
      return state
  }
}


