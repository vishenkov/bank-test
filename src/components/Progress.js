import React from 'react';
import styles from './Progress.scss';

const Progress = () => (
  <div className={styles.container}>
    <div className={styles.progress} role="progressbar" />
  </div>
);

export default Progress;
