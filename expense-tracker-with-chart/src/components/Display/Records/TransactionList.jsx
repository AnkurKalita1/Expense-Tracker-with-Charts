import React from 'react'

const TransactionList = ({filteredData}) => {

  return (
    <div className='TransactionList'>
       {filteredData.map((t , index)=> (
        <li key={index}>
           {t.type} -  <span>{t.amount} </span>-{t.desc}  - {t.category } {t.date.toString().split('T')[0]}
        </li>
       ))}
    </div>
  )
}

export default TransactionList
