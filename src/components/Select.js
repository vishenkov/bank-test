import React from 'react';
import styles from './Input.scss';

const Select = ({ name, label, value, onChange, options = [] }) => (
  <div className={styles.group}>
    {!!label && <label htmlFor={name}>{label}</label>}
    <select className={`${styles.control} ${styles.select}`} name={name} value={value} onChange={onChange}>
      <option>---</option>
      {options.map(({ value, text }) =>
        <option key={value} value={value || ''}>{text}</option>
      )}
    </select>
  </div>
);

export default Select;