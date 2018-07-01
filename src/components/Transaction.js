import React, {Component} from 'react';
import Progress from './Progress';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Overlay from './Overlay';

import styles from './Login.scss';

class Transaction extends Component {
    state = {
      amount: 0,
      bank: null,
    };

  componentWillMount() {
    this.props.getBanks();
  }

  handleSubmit = e => {
    e.preventDefault();

    const { amount, bank } = this.state;
    const bankId = parseInt(bank, 10);

    if (!bankId) return this.props.showAlert('Please, select Bank');

    this.props.addTransaction({
      amount: parseInt(amount, 10),
      bankId,
    });

    this.setState({
      amount: 0,
      bank: null,
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { banks, isFetching } = this.props;
    const { amount, bank } = this.state;
    const banksOptions = !isFetching
      ? Object.keys(banks).map(key => ({ value: key, text: banks[key] }))
      : [];
    // console.log('banks map', banksOptions);

    return (
      <div>
      <h2>Add transaction</h2>
      <form className={styles.form} name="form" onSubmit={this.handleSubmit}>
        {isFetching &&
          <Overlay>
            <Progress />
          </Overlay>
        }
        <Input
          type="number"
          name="amount"
          value={amount}
          label="Amount"
          onChange={this.handleChange}
        />
        <Select
          name="bank"
          value={bank || 0}
          label="Bank"
          onChange={this.handleChange}
          options={banksOptions}
        />

        <Button
          type="submit"
          text="Add"
          primary
        />
      </form>
    </div>
  );
  }
}

export default Transaction;