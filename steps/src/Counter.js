import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default function Counter(){
    let [count , setCount]=useState(1)
    function handleAdd(){
        if(count>0&&count<10){
            setCount(count+=1)
        }
    }
    function handleMinus(){
        if(count>0&&count<10){
            setCount(count-=1)
        }
    }
    return (
        <div  className='dataContainer'>
        <h3 style={{ marginLeft:'50px',color:'black', fontFamily:'sans-serif'}}>{count}</h3>

       <button onClick={handleAdd}>Plus</button>
       <button onClick={handleMinus}>Minus</button>
        </div>
    )
}