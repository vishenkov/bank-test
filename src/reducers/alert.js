import {
  ALERT_SHOW,
  ALERT_HIDE,
} from '../actions';

const initialState = {
  message: '',
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return {
        ...state,
        message: action.message,
        isOpen: true,
      };

    case ALERT_HIDE:
      return {
        ...state,
        message: '',
        isOpen: false,
      };

    default:
      return state;
  }
};