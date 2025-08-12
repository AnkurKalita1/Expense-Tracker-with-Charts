import React from 'react'
import {useState , useEffect} from 'react'
const App = () => {
  const [transactions , setTransactions ] = useState([])


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
    </div>
  )
}

export default App
