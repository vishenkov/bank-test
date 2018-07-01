import { delay } from './helpers';

const userService = {
  async login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    const user = {
      username,
      password,
    };

    localStorage.setItem('user', JSON.stringify(user));

    await delay();

    return user;
  },

  logout() {
    localStorage.removeItem('user');
  },
};

export default userService;