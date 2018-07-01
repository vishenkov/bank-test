import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getAll,
  deleteTransaction
} from '../actions';

import Transactions from '../components/Transactions'


const mapStateToProps = ({ transactions, banks }) => ({
  transactions: transactions.transactions,
  isTransactionsFetching: transactions.isFetching,
  banks: banks.banks,
  isBankFetching: banks.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAll,
      deleteTransaction,
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
