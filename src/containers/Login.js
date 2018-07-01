import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  login,
  logout,
  showAlert
} from '../actions';

import Login from '../components/Login'

const mapStateToProps = ({ user }) => ({
  isLoggedIn: user.isLoggedIn,
  isChecking: user.isChecking,
  user: user.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login,
      logout,
      showAlert,
      push,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
