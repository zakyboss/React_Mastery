import React from 'react'
import './index.css'

export default function Output({balance, loan}) {
  return (
    <div className='Output'>
        <h2>Balance : {balance}</h2>
         <h2>Loan : {loan}</h2>
    </div>
  )
}
