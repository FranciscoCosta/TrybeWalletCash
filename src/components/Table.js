import React, { Component } from 'react';
import './Table.css';
import { connect } from 'react-redux';
import { arrayOf, shape } from 'prop-types';
import { removeExpenses, edditingExpenses } from '../redux/actions/index';
import ChartPie from './ChartPie';
import { AiTwotoneEdit } from '@react-icons/all-files/ai/AiTwotoneEdit';
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete';

class Table extends Component {
  deleteRow = (id) => {
    const { expenses, dispatch } = this.props;
    const removeItem = expenses.filter((expense) => expense.id !== id);
    dispatch(removeExpenses(removeItem));
  };

  editRow = (id) => {
    const { dispatch } = this.props;
    dispatch(edditingExpenses(id));
  };

  render() {
    const { expenses } = this.props;
    const objT = expenses.filter((expense) => expense.tag === 'Trabalho');
    const work = objT.map(
      (coin) => coin.value * coin.exchangeRates[coin.currency].ask);
    const workValue = work.reduce((acc, curr) => acc + curr, 0);
    const WorkChart = workValue.toFixed(2);
    const objA = expenses.filter((expense) => expense.tag === 'Alimentação');
    const Alimentacao = objA.map(
      (coin) => coin.value * coin.exchangeRates[coin.currency].ask
    );
    const AlimentacaoValue = Alimentacao.reduce((acc, curr) => acc + curr, 0);
    const AlimentacaoChart = AlimentacaoValue.toFixed(2);
    const objL = expenses.filter((expense) => expense.tag === 'Lazer');
    const Lazer = objL.map(
      (coin) => coin.value * coin.exchangeRates[coin.currency].ask
    );
    const LazerValue = Lazer.reduce((acc, curr) => acc + curr, 0);
    const LazerChart = LazerValue.toFixed(2);
    const objS = expenses.filter((expense) => expense.tag === 'Saúde');
    const saude = objS.map(
      (coin) => coin.value * coin.exchangeRates[coin.currency].ask
    );
    const saudeValue = saude.reduce((acc, curr) => acc + curr, 0);
    const saudeChart = saudeValue.toFixed(2);
    const objTr = expenses.filter((expense) => expense.tag === 'Transporte');
    const trans = objTr.map(
      (coin) => coin.value * coin.exchangeRates[coin.currency].ask
    );
    const transValue = trans.reduce((acc, curr) => acc + curr, 0);
    const transChart = transValue.toFixed(2);

    const chartData = {
      labels: ['Trabalho', 'Alimentação', 'Lazer', 'Sáude', 'Transporte'],
      datasets: [
        {
          label: 'Despesas',
          data: [
            WorkChart,
            AlimentacaoChart,
            LazerChart,
            saudeChart,
            transChart,
          ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(205, 205, 86)',
            'rgb(155, 205, 86)',
            'rgb(55, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };
    return (
      <div className='Table'>
        <table className='Table__header'>
          <thead>
            <tr className='Table__header-titles'>
              <th className='cell'>Descrição</th>
              <th className='cell'>Tag</th>
              <th className='cell'>Método de pagamento</th>
              <th className='cell'>Valor</th>
              <th className='cell'>Moeda</th>
              <th className='cell'>Câmbio utilizado</th>
              <th className='cell'>Valor convertido</th>
              <th className='cell'>Moeda de conversão</th>
              <th className='cell'>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={e.id} className='Table__header-row'>
                <td className='cell'>{e.description}</td>
                <td className='cell'>{e.tag}</td>
                <td className='cell'>{e.method}</td>
                <td className='cell'>{Number(e.value).toFixed(2)}</td>
                <td className='cell'>{e.exchangeRates[e.currency].name}</td>
                <td className='cell'>
                  {Number(e.exchangeRates[e.currency].ask).toFixed(2)}
                </td>
                <td className='cell'>
                  {Number(e.value * e.exchangeRates[e.currency].ask).toFixed(2)}
                </td>
                <td className='cell'>Real</td>
                <td className='cell'>
                  <AiTwotoneEdit
                    size={40}
                    color="black"
                    className='Table__button-edit'
                    type='button'
                    data-testid='edit-btn'
                    onClick={() => this.editRow(e.id)}
                  >
                    Editar
                  </AiTwotoneEdit>
                  <AiFillDelete
                    size={40}
                    color="crimson"
                    className='Table__button-delete'

                    type='button'
                    data-testid='delete-btn'
                    onClick={() => this.deleteRow(e.id)}
                  >
                    Excluir
                  </AiFillDelete>
                </td>
              </tr>
            ))}
            <tr className='Table__Chart-row'>
              <td className='Table__Chart-chart'>
                <h2 className='Table__Chart-title'>Categorias:</h2>
                <ChartPie chartData={chartData} className="Table__Chart-margin"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: arrayOf(shape()),
}.isRequired;

export default connect(mapStateToProps)(Table);
