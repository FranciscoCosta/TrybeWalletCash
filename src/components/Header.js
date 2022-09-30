import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { valor, currency } = this.state;
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
            <span>Total de despesas: </span>
            {valor}
          </p>
        </div>
        <div className="Header__currency header-info">
          <p data-testid="header-currency-field">
            <span>Moedas: </span>
            {currency}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
