import React from 'react';
import styles from './Button.scss';

const Button = ({ type = 'button', primary, text, onClick = f => f, disabled = false }) => (
  <button
    type={type} 
    className={`${styles.button} ${primary ? styles.primary : ''}`}
    onClick={onClick}
    disabled={!!disabled}
  >
    {text}
  </button>
);

export default Button;