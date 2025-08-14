import React from 'react'
import {useState , useEffect} from 'react'
import TransactionForm from './components/TransactionForm/TransactionForm'
import TransactionList from './components/TansactionList/TransactionList'
import ChartComponent from './components/Display/ChartComponent'
import Stats from './components/states/Stats'
import "./app.css"
import Display from './components/Display/Display'
const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved? JSON.parse(saved):[]
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
        {/* <TransactionList transactions={transactions}/> */}
      <Stats transactions={transactions}/>
      <ChartComponent transactions={transactions}/>
      <Records/>



    </div>
  )
}

export default App
