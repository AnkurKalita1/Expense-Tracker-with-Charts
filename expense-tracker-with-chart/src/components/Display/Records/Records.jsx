import React, { useState } from 'react'
import ExpenseFilter from '../../ExpenseFilter/ExpenseFilter';
import TransactionList from './TransactionList';
import ChartComponent from '../ChartComponent';
const Records = ({allTransactions}) => {
  const months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
  const onlyExpenses = allTransactions.filter(exp => exp.type === "expense")
   
  const [filteredYear, setFilteredYear] = useState('2025')
  const [filteredMonth, setFilteredMonth] = useState("")

  const changeFilterHandler = (selectedYear,selectedMonth) => {
    setFilteredYear(selectedYear)
    setFilteredMonth(selectedMonth)
  }
  let monthIndex = months.indexOf(filteredMonth)
 

  const filteredExpenses = onlyExpenses.filter((exp) => {
    let date=new Date(exp.date)
    let yearMatch = date.getFullYear().toString() === filteredYear
    let monthMatch = filteredMonth ? date.getMonth() === monthIndex:true
    return (
      yearMatch && monthMatch
    )
  })
  return (
  
    <>
    <div className='Records'>
    <ExpenseFilter selectedYear={filteredYear} selectedMonth={filteredMonth} onChangeFilter={changeFilterHandler} />
    
    <TransactionList filteredData={filteredExpenses} />
    <ChartComponent transactions={filteredExpenses}/>
    </div>
   
    </>
  )
}

export default Records
