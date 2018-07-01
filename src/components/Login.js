import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Progress from './Progress';
import Input from './Input';
import Button from './Button';
import Overlay from './Overlay';

import styles from './Login.scss';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) return this.props.showAlert('Username and Password should not be empty!');
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
    const { isLoggedIn, isChecking, location } = this.props;

    return (
      <div>
      {isLoggedIn &&
        <Redirect to={{ pathname: '/', state: { from: location } }} />}
      <h2>Login</h2>
      <form className={styles.form} name="form" onSubmit={this.handleSubmit}>
        {isChecking &&
          <Overlay>
            <Progress />
          </Overlay>
        }
        <Input
          name="username"
          value={username}
          label="Username"
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          text="Login"
          primary
        />
      </form>
    </div>
  );
  }
}

export default Login;