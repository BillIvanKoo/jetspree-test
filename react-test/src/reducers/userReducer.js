import * as actionType from '../actions/constants';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.FETCH_USERS_SUCCESS:
      return [...action.users]
    case actionType.ADD_USER_SUCCESS:
      return [...state, action.user]
    default:
      return state
  }
}

export default userReducer;
