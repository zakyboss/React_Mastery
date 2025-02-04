import React from 'react'
import './index.css'
export default function OpenAccount({dispatch}) {
  return (
    <div>
        <button className='btn' onClick={dispatch({type:'openAccount'})} >
            Open Account
        </button>
    </div>
  )
}
