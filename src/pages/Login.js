import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { AiOutlineWallet } from "@react-icons/all-files/ai/AiOutlineWallet";
import PropTypes from 'prop-types';
import getUser from '../redux/actions/index';

const MIN_REQUEST_PASSWORD = 5;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      btnDisable: true,
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.checkLogin();
  }

  handleClick = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { history, dispatch } = this.props;
    const user = {
      email,
    };
    dispatch(getUser(user));
    history.push('/carteira');
  };

  checkEmail = (email) => (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i));

  checkLogin = () => {
    const { email, password } = this.state;
    if (password.length >= MIN_REQUEST_PASSWORD && this.checkEmail(email)) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  };

  render() {
    const { email, password, btnDisable } = this.state;
    return (
      <div className="Login">
        <div className="Login__header">
          <h1 className="Login__title">TRYBEWALLET</h1>
          <AiOutlineWallet size="100" color="#1a1a17" className='Login__logo'/>
        </div>
        <div className="Login__container">
          <form className="Login__form">
            <div className="Login__form-field">
              <input
                type="text"
                className="Login__form-input"
                placeholder="Utilizador/Email"
                data-testid="email-input"
                required
                name="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </div>
            <div className="Login__form-field">
              <input
                type="password"
                className="Login__form-input"
                placeholder="Password"
                data-testid="password-input"
                required
                onChange={ this.handleChange }
                value={ password }
                name="password"
              />
            </div>

            <div className="Login__form-submit">
              <button
                className="Login__button"
                onClick={ this.handleClick }
                type="button"
                disabled={ btnDisable }
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
