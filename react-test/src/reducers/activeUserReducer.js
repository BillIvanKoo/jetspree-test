import * as actionType from '../actions/constants';

const activeUserReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.LOGIN_SUCCESS:
      return {...action.user}
    case actionType.LOGOUT:
      return {}
    default:
      return state
  }
}

export default activeUserReducer;
