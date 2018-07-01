import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getBanks,
  addTransaction
} from '../actions';

import Transaction from '../components/Transaction'



const mapStateToProps = ({ banks }) => ({
  banks: banks.banks,
  isFetching: banks.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBanks,
      addTransaction,
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
