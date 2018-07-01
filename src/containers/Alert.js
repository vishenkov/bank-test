import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  hideAlert,
} from '../actions';

import Alert from '../components/Alert';

const mapStateToProps = ({ alert }) => ({
  message: alert.message,
  isOpen: alert.isOpen,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      hideAlert,
      push,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
