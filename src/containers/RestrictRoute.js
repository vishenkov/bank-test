import { connect } from 'react-redux';

import RestricRoute from '../components/RestricRoute'

const mapStateToProps = ({ user }) => ({
  isLoggedIn: user.isLoggedIn,
  isChecking: user.isChecking,
  user: user.user,
});


export default connect(mapStateToProps)(RestricRoute);
