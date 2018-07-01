import React, {Component} from 'react';
import Progress from './Progress';

class Transaction extends Component {
    state = {
      amount: 0,
      bank: 0,
    };

  componentWillMount() {
    this.props.getBanks();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { amount, bank } = this.state;
    console.log(this.state);
    this.props.addTransaction({
      amount: parseInt(amount, 10),
      bankId: parseInt(bank, 10),
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

    return (
      <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="number" className="form-control" name="amount" value={amount} onChange={this.handleChange} />
          </div>
          <div className="form-group">
              <label htmlFor="bank">Bank</label>
              <select name="bank" onChange={this.handleChange}>
                {!isFetching && Object.keys(banks).map(key =>
                  <option key={key} value={key}>{banks[key]}</option>
                )}
              </select>
          </div>
          <div className="form-group">
              <button className="btn btn-primary">Add</button>
          </div>
      </form>
    </div>
  );
  }
}

export default Transaction;