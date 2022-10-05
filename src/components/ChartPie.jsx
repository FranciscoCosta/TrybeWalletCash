import React from 'react'
import {Bar, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function ChartPie({chartData}) {
  return (
    <Pie data={chartData} />
  )
}

export default ChartPie;