import React from 'react';
import Button from './Button';
import styles from './UserCard.scss';

const UserCard = ({ className, username, onClick }) => (
  <div className={`${className} ${styles.container}`}>
    <p>Welcome, {username}!</p>
    <Button
      onClick={onClick}
      text="Logout"
    />
  </div>
);

export default UserCard;
