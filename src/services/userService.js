const userService = {
  async login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify({
      username,
      password,
    }));
  },

  logout() {
    localStorage.removeItem('user');
  },
};

export default userService;