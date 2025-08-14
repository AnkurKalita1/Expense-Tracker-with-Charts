import React from 'react'
import ChartComponent from './ChartComponent'
import Records from './Records'

const Display = ({transactions}) => {
  return (
    <div className='Display'>
      <ChartComponent transactions={transactions}/>
      <Records/>
    </div>
  )
}

export default Display
