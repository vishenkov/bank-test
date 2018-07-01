import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_CHECKING,
} from '../actions';

const user = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
  isChecking: false,
  user,
  isLoggedIn: !!user,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_CHECKING:
      return {
        ...state,
        isChecking: action.value,
      };

    case USER_LOGIN:
      return {
        ...state,
        user: action.user,
        isChecking: false,
        isLoggedIn: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        isChecking: false,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};