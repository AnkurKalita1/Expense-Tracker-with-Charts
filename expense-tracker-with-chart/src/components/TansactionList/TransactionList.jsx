import React from 'react'

const TransactionList = ({filteredData}) => {

  return (
    <div>
       {filteredData.map((t , index)=> (
        <li key={index}>
           {t.type} - {t.amount} - {t.desc} - {t.category } {t.date.toString()}
        </li>
       ))}
    </div>
  )
}

export default TransactionList
