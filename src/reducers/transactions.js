import {
  TRANSACTIONS_FETCHING,
  TRANSACTIONS_SUCCESS,
  TRANSACTIONS_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };

    case TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.transactions,
        isFetching: false,
      };

    default:
      return state;
  }
};