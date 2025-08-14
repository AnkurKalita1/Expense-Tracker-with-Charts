import React from 'react'
import ChartComponent from './ChartComponent'
import Records from './Records'

const Display = ({transactions}) => {
  return (
    <div className='Display'>
      <ChartComponent transactions={transactions}/>
      <Records transactions={transactions} />
    </div>
  )
}

export default Display
