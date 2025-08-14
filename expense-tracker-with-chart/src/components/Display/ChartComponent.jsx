import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import {Doughnut} from "react-chartjs-2"
const ChartComponent = ({transactions }) => {
  let expenses = transactions.filter(expense => expense.type === "expense")
  
  const categoryTotals = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount
    return acc;
  }, {})
  const labels = Object.keys(categoryTotals)
  const dataValues=Object.values(categoryTotals)
  return (
    <div className='doughnut-chart charts' style={{ width: "300px", height: "300px", margin: "0 auto" }}>
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              label: "Expense",
              data: dataValues,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0'
              ]
            }
          ]
            
        } } />
    </div>
  )
}

export default ChartComponent
