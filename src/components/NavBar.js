import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import styles from './NavBar.scss';

const NavBar = ({ isLoggedIn, logout, user }) => (
  <nav className={styles.container}>
    <ul className={styles.items}>
      <li className={styles.item}>
        <Link to="/" className={styles.logo}>Bank</Link>
      </li>
      {isLoggedIn && <li className={styles.item}>
        <Link to="/" className={styles.link}>Transactions</Link>
      </li>
      }
      {isLoggedIn && <li className={styles.item}>
        <Link to="/add" className={styles.link}>Add Transaction</Link>
      </li>}
      {!isLoggedIn && <li className={styles.item}>
        <Link to="/login" className={styles.link}>Login</Link>
      </li>}
    </ul>
    {isLoggedIn && <UserCard className={styles.card} username={user.username} onClick={logout} />}
  </nav>
);

export default NavBar;
