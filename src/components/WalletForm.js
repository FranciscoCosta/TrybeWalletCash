import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, string, PropTypes } from 'prop-types';
import { getCurrencies, isLoading } from '../redux/actions/index';
import './WalletForm.css';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      expenses: 0,
      descripton: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.requestCoins();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  requestCoins = async () => {
    const { dispatch } = this.props;
    dispatch(isLoading());
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const coinsInfo = await fetch(endpoint);
    const coinsJSON = await coinsInfo.json();
    const curenciesTotal = Object.keys(coinsJSON);
    const currencies = curenciesTotal.filter((coin) => coin !== 'USDT');
    dispatch(getCurrencies(currencies));
  };

  render() {
    const { expenses, descripton } = this.state;
    const { loading, currencies } = this.props;

    if (loading) return <h1>Carrengado...</h1>;
    return (
      <div className="WalletForm">
        <div className="WalletForm__container">
          <input
            data-testid="value-input"
            type="number"
            className='WalletForm__info"'
            placeholder="Despesas"
            required
            name="expenses"
            value={ expenses }
            onChange={ this.handleChange }
          />
          <input
            data-testid="description-input"
            type="text"
            className='WalletForm__info"'
            placeholder="Descrição"
            required
            name="descripton"
            value={ descripton }
            onChange={ this.handleChange }
          />
          <select data-testid="currency-input">
            {currencies.map((coin) => (
              <option value={ coin } key={ coin }>
                {coin}
              </option>
            ))}
          </select>
          <select data-testid="method-input">
            <option name="Dinheiro" value="Dinheiro">Dinheiro</option>
            <option
              name="Cartão de crédito"
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              name="Cartão de débito"
              value="Cartão de débito"
            >
              Cartão de débito
            </option>

          </select>

          <select data-testid="tag-input">
            <option name="Alimentação" value="Alimentação">Alimentação</option>
            <option
              name="Lazer"
              value="Lazer"
            >
              Lazer
            </option>
            <option
              name="Transporte"
              value="Transporte"
            >
              Transporte
            </option>
            <option
              name="Saúde"
              value="Saúde"
            >
              Saúde
            </option>
            <option
              name="Trabalho"
              value="Trabalho"
            >
              Trabalho
            </option>

          </select>
        </div>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currencies: arrayOf(string).isRequired,
};

const mapStateToProps = ({ wallet: { loading, currencies } }) => ({
  loading,
  currencies,
});

export default connect(mapStateToProps)(WalletForm);
