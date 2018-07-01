import React from 'react';
import styles from './Input.scss';

const Input = ({ name, label, value, onChange, type = 'text' }) => (
  <div className={styles.group}>
    {!!label && <label htmlFor={name}>{label}</label>}
    <input type={type} className={styles.control} name={name} value={value} onChange={onChange} />
  </div>
);

export default Input;