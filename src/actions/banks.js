import bankService from '../services/bankService';

export const BANKS_FETCHING = 'BANKS_FETCHING';
export const BANKS_SUCCESS = 'BANKS_SUCCESS';
export const BANKS_FAILURE = 'BANKS_FAILURE';

function success(banks) {
  return {
    type: BANKS_SUCCESS,
    banks,
  };
}

function fail(message) {
  return {
    type: BANKS_FAILURE,
    message,
  };
}


export function getBanks() {
  return async dispatch => {
    dispatch(); // start fethcing
    try {
      const banks = await bankService.getBanks();
      dispatch(success(banks));
    } catch (err) {
      dispatch(fail(err.message));
    }
  }
}
