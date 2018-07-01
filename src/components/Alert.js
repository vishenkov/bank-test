import React from 'react';
import Button from './Button';
import styles from './Alert.scss';

const Alert = ({ isOpen, hideAlert, message }) => (
  isOpen
  ? <div className={styles.container}>
      <p>{message}</p>
      <Button
        onClick={hideAlert}
        text="Close"
      />
    </div>
  : null
);

export default Alert;
