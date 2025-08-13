import React from 'react'
import "./Stats.css"

const Stats = ({transactions}) => {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;
  return (
    <div className='stats'>
 
       <p className='balance'> Balance: {balance}  </p>
      <p className='income'>Income: {income}</p>
      <p className='expense'> Expense: {expense}</p>

    </div>
  )
}

export default Stats
