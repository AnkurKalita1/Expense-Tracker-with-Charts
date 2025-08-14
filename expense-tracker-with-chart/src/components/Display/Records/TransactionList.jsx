import React from 'react'

const TransactionList = ({filteredData}) => {

  return (
    <div className='TransactionList'>
       {filteredData.map((t , index)=> (
        <li key={index}>
           {t.type} -  <span>{t.amount} </span>-{t.desc}  - {t.category } {t.date.toString()}
        </li>
       ))}
    </div>
  )
}

export default TransactionList
