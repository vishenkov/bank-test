import React from 'react';

const TransactionItem = ({ data, bank, onDelete }) => (
  <tr>
    <td>{data.amount}</td>
    <td>{bank}</td>
    <td><button onClick={onDelete}>Delete</button></td>
  </tr>
);

export default TransactionItem;
