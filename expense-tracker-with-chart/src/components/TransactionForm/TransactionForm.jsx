import React, { useState } from 'react'
import "./TransactionForm.css"
const TransactionForm = ({onAdd}) => {
const [ type, setType] = useState("income")
const [amount,setAmount] = useState("")
const [desc,setDesc] = useState("")

const handleSubmit = (e)=>{
   e.preventDefault()
   if(!amount) return ;
   onAdd({type , amount:parseFloat(amount) , desc ,category, date:new Date()})
   setAmount("")
  setDesc("")
  setCategory("")
}
  return (
    <form onSubmit={handleSubmit} className='TransactionForm'>
     <select value={type} onChange={(e)=>setType(e.target.value)} className='type_select input'>
        <option value="income" > Income</option>
        <option value="expense"> Expense</option>
     </select>

    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Amount'/>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder='Description'/>
    <button type='submit'> Add</button>
    </form>
  )
}


export default TransactionForm
