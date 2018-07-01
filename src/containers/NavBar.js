import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  login,
  logout
} from '../actions';

import NavBar from '../components/NavBar'

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
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
