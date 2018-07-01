import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Progress from './Progress';


class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = e => {
    const { username, password } = this.state;

    e.preventDefault();
    console.log(this.props);
    this.props.login(username, password);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { username, password } = this.state;
    const { isLoggedIn, location } = this.props;

    return (
      <div className="col-md-6 col-md-offset-3">
      {isLoggedIn &&
        <Redirect to={{ pathname: '/', state: { from: location } }} />}
      <h2>Login</h2>
      <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <button className="btn btn-primary">Login</button>
          </div>
      </form>
    </div>
  );
  }
}

export default Login;