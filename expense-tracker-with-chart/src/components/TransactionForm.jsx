import React, { useState } from 'react'

const TransactionForm = ({onAdd}) => {
const [ type, setType] = useState("income")
const [amount,setAmount] = useState("")
const [desc, setDesc] = useState("")
const [category,setCategory]=useState("")  

const handleSubmit = (e)=>{
   e.preventDefault()
   if(!amount || !desc) return ;
   onAdd({type , amount:parseFloat(amount) , desc ,category, date:new Date()})
   setAmount("")
  setDesc("")
  setCategory("")
}

  return (
    <form onSubmit={handleSubmit} className='TransactionForm'>
     <select value={type} onChange={(e)=>setType(e.target.value)}>
        <option value="income" > Income</option>
        <option value="expense"> Expense</option>
     </select>

    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder='Amount'/>
      <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Description' />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Bills">Bills</option>
        <option value="Transport">Transport</option>
        <option value="Other">Other</option>
      </select>
    <button type='submit'> Add</button>
    </form>
  )
}

export default TransactionForm
