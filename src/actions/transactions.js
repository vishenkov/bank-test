import bankService from '../services/bankService';
import { getBanks } from './banks';

export const TRANSACTIONS_FETCHING = 'TRANSACTIONS_FETCHING';
export const TRANSACTIONS_SUCCESS = 'TRANSACTIONS_SUCCESS';
export const TRANSACTIONS_FAILURE = 'TRANSACTIONS_FAILURE';

function start() {
  return {
    type: TRANSACTIONS_FETCHING,
    value: true,
  }
}

function stop() {
  return {
    type: TRANSACTIONS_FETCHING,
    value: false,
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
      dispatch(getBanks());
    } catch(err) {
      dispatch(fail(err.message));
      dispatch(stop());
      // console.log(err);
    }
  };
}

export function deleteTransaction(id) {
  return async dispatch => {
    dispatch(start());

    try {
      const transactions = await bankService.deleteTransaction(id);
      dispatch(success(transactions));
    } catch(err) {
      dispatch(fail(err.message));
      dispatch(stop());
    }
  };
}

export function addTransaction(details) {
  return async dispatch => {
    dispatch(start());

    try {
      await bankService.addTransaction(details);
      dispatch(success());
    } catch(err) {
      dispatch(fail(err.message));
      dispatch(stop());
    }
  };
}

