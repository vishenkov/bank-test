import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.user
      };

    case USER_LOGOUT:
      return null;

    default:
      return state;
  }
};