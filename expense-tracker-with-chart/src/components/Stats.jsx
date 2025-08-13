import React from 'react'

const Stats = (props) => {
  let transactionList = props.transactions
  let expenses = transactionList.filter(expense => expense.type === "expense")
  let income = transactionList.filter(income => income.type === "income")
  let totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0)
  let totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0)
  console.log("totalExpense: ",totalExpense," totalIncome: ",totalIncome);
  
  return (
    <div>
      <h2>Total Income: {totalIncome}</h2>
      <h2>Total Expense: {totalExpense }</h2>
      <h2>Savings: {totalIncome-totalExpense }</h2>
    </div>
  )
}

export default Stats
