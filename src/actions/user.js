import userService from '../services/userService';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_CHECKING = 'USER_CHECKING';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

function start() {
  return {
    type: USER_CHECKING,
    value: true,
  }
}

function stop() {
  return {
    type: USER_CHECKING,
    value: false,
  }
}

function success(user) {
  return {
    type: USER_LOGIN,
    user,
  };
}

function fail(message) {
  return {
    type: USER_LOGIN_FAILURE,
    message,
  };
}

export function logout() {
  userService.logout();
  return {
    type: USER_LOGOUT,
  };
}

export function login(username, password) {
  return async dispatch => {
    dispatch(start()); // start fethcing
    try {
      const user = await userService.login(username, password);
      dispatch(success(user));
    } catch (err) {
      dispatch(fail(err.message));
      dispatch(stop());
    }
  }
}
