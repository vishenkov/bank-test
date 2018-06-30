import bankService from '../services/bankService';

export const TRANSACTIONS_FETCHING = 'TRANSACTIONS_FETCHING';
export const TRANSACTIONS_SUCCESS = 'TRANSACTIONS_SUCCESS';
export const TRANSACTIONS_FAILURE = 'TRANSACTIONS_FAILURE';

function start() {
  return {
    type: TRANSACTIONS_FETCHING,
  }
}

function stop() {
  return {
    type: TRANSACTIONS_FETCHING,
  }
}

function success(transactions) {
  return {
    type: TRANSACTIONS_SUCCESS,
    transactions,
  };
}

function fail(message) {
  return {
    type: TRANSACTIONS_FAILURE,
    message,
  };
}

export function getAll() {
  return async dispatch => {
    dispatch(start());

    try {
      const transactions = await bankService.getTransactions();
      dispatch(success(transactions));
    } catch(err) {
      dispatch(fail(err.message));
    } finally {
      dispatch(stop());
    }
  };
}

export function deleteTransaction(id) {
  return async dispatch => {
    dispatch(start());

    try {
      const transactions = await bankService.delete(id);
      dispatch(success(transactions));
    } catch(err) {
      dispatch(fail(err.message));
    } finally {
      dispatch(stop());
      dispatch(getAll());
    }
  };
}

export function addTransaction(details) {
  return async dispatch => {
    dispatch(start());

    try {
      const transactions = await bankService.add(details);
      dispatch(success(transactions));
    } catch(err) {
      dispatch(fail(err.message));
    } finally {
      dispatch(stop());
      dispatch(getAll());
    }
  };
}

