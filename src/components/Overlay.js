import React from 'react';
import styles from './Overlay.scss';

const Overlay = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default Overlay;