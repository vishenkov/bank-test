import React, {Component} from 'react';
import Progress from './Progress';
import TransactionItem from './TransactionItem';
import styles from './Transactions.scss';

class Transactions extends Component {
  componentWillMount() {
    this.props.getAll();
    console.log('cWM Transactions');
  }

  onDelete = id => e => {
    e.preventDefault();
    console.log('call delete', id);
    this.props.deleteTransaction(id);
  }

  render() {
    const { transactions, banks, isTransactionsFetching, isBankFetching } = this.props;
    const isFetching = isTransactionsFetching || isBankFetching;
    console.log(transactions, isFetching );
    return (
    <div>
      <h2>Transactions</h2>
      {isFetching
        ? <Progress />
        :  <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Bank</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction =>
                <TransactionItem
                  key={transaction.id}
                  data={transaction}
                  bank={banks[transaction.bankId]}
                  onDelete={this.onDelete(transaction.id)}
                />
              )}
            </tbody>
          </table>
      }
    </div>
  );
  }
}

export default Transactions;