import React, { Component } from 'react';

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
        <div className="Header__user">
          <p data-testid="email-field">{email}</p>
        </div>
        <div className="Header__expenses">
          <p data-testid="total-field">{valor}</p>
        </div>
        <div className="Header__currency">
          <p data-testid="header-currency-field">{currency}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pessoal: state.dadosPersonalReducer.dadosPersonal,
  profissional: state.dadosPersonalReducer.dadosProfissional,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
