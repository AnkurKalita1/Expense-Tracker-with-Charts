import React from 'react'
import {useState , useEffect} from 'react'
import "./App.css"
import TransactionForm from './components/TransactionForm/TransactionForm'
import Stats from './components/stats/Stats'
import Display from './components/Display/Display'
const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    if(!saved) return []
    return JSON.parse(saved).map(s => ({
      ...s,
      date:new Date(s.date)
    }))
  })


  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("transactions")) || []
    setTransactions(saved)
  },[])


  useEffect(()=>{
     localStorage.setItem("transactions", JSON.stringify(transactions))
  },[transactions]) ;

  const addTransaction = (transaction)=>{
   setTransactions([...transactions, transaction])
  }

  return (

    <div className='app'>
        <h1> Expanse Tracker</h1>
      <TransactionForm onAdd={addTransaction}/>
      <Stats transactions={transactions}/>
      <Display transactions={transactions} />
      
    </div>
  )
}

export default App
