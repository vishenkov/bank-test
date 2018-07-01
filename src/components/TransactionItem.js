import React from 'react';

const TransactionItem = ({ data, bank, onDelete }) => (
  <tr className={data.type === 'sell' ? 'table-danger' : 'table-success'}>
    <td>{data.amount}</td>
    <td>{bank}</td>
    <td><button onClick={onDelete}>Delete</button></td>
  </tr>
);

export default TransactionItem;
