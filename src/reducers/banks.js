import {
  BANKS_FETCHING,
  BANKS_SUCCESS,
  BANKS_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  banks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BANKS_FETCHING:
      return {
        ...state,
        isFetching: action.value
      };

    case BANKS_SUCCESS:
      return {
        ...state,
        banks: action.banks,
        isFetching: false,
      };

    default:
      return state;
  }
};