import {
  BANKS_FETCHING,
  BANKS_SUCCESS,
  BANKS_FAILURE,
} from '../actions';

const initialState = {
  isFetchingBanks: false,
  banks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BANKS_FETCHING:
      return {
        ...state,
        isFetchingBanks: true
      };

    case BANKS_SUCCESS:
      return {
        ...state,
        banks: action.banks,
        isFetchingBanks: false
      };

    default:
      return state;
  }
};