import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const { email, expenses } = this.props;
    const { currency } = this.state;
    console.log(expenses);
    const a = expenses.map((coin) => coin.value * coin.exchangeRates[coin.currency].ask);
    const final = a.reduce((acc, curr) => acc + curr, 0);
    const total = Number(final.toFixed(2));
    return (
      <div className="Header">
        <div className="Header__user header-info">
          <p data-testid="email-field">
            <span>Email: </span>
            { email }
          </p>
        </div>
        <div className="Header__expenses header-info">
          <p data-testid="total-field">
            {/* <span>Total de despesas: </span> */}
            {total}
          </p>
        </div>
        <div className="Header__currency header-info">
          <p data-testid="header-currency-field">
            <span>Moeda: </span>
            {currency}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: string,
  expenses: arrayOf(shape()),
}.isRequired;

export default connect(mapStateToProps)(Header);
