import React, {Component} from 'react';
import Progress from './Progress';
import TransactionItem from './TransactionItem';

class Transactions extends Component {
  componentWillMount() {
    this.props.getAll();
    // console.log(this.props);
  }

  onDelete = id => e => {
    e.preventDefault();
    console.log('call delete', id);
    this.props.deleteTransaction(id);
  }

  render() {
    const { transactions, banks, isTransactionsFetching, isBankFetching } = this.props;
    const isFetching = isTransactionsFetching && isBankFetching;
    console.log(transactions);
    return (
    <div>
      {isFetching
        ? <Progress />
        :  <table className="table table-sm">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Bank</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction =>
                <TransactionItem
                  key={transaction.id}
                  data={transaction}
                  bank={banks[transaction.id]}
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