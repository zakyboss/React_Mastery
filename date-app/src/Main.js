import './index.css';
import React, { useState } from 'react';
const days = ['Monday', 'Tuesday', '', '','','']

export default function Main (){
    const [step , setStep]= useState(1);
    const [count, setCount]= useState(0);
    const date = new Date(Date.now()); // Current date and time
    // Format the date to a human-readable string
    const formattedDate = date.toLocaleDateString(); // e.g., "1/13/2025"

    function handleIncStep(){
        setStep((s)=>s+1)
    }
function handleDecStep(){
    setStep((s)=>s-1)

}
function handleIncCurrent(){
 setCount((c)=> c+step)   
//  setCount((c)=> c+1)   
}
function handleDecCurrent(){
    setCount((c)=> c-step)   

}
    return (
        <div className='container'>
<section className='step'>
    <h2>Step {step}</h2>
    <span>
    <button className='stepButton' onClick={handleIncStep}>Increase</button>
        <button className='stepButton' onClick={handleDecStep}>Decrease</button>
    </span>
</section>
<section className='counter'>
    <span>
    <h2>Counter : {count}</h2>
        <button className='countButton' onClick={handleIncCurrent}>next</button>
        <button className='countButton' onClick={handleDecCurrent}>Previous</button>
        <h5>In  days it will be {formattedDate[3]} </h5>
        </span>
</section>

        </div>
    )
}