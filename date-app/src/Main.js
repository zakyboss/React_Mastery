import './index.css';
import React, { useState } from 'react';
const days = ['Monday', 'Tuesday', '', '','','']

export default function Main (){
    const [step , setStep]= useState(1);
    const [count, setCount]= useState(0);
    function handleIncStep(){
        setStep((s)=>s+1)
    }
    function handleDate(){
        const date = new Date(Date.now()); // Current date and time
        // Format the date to a human-readable string
        const formattedDate = date.toLocaleDateString(); // e.g., "1/13/2025"
        const formattedTime = date.toLocaleTimeString(); // e.g., "10:45:30 AM"
      
    }
    return (
        <div className='container'>
<section className='step'>
    <h2>Step {step}</h2>
    <span>
    <button className='stepButton'>Increase</button>
        <button className='stepButton'>Decrease</button>
    </span>
</section>
<section className='counter'>
    <span>
    <h2>Counter</h2>
        <button className='countButton'>next</button>
        <button className='countButton'>Previous</button>
        <h5>In  days it will be {} </h5>
        </span>
</section>

        </div>
    )
}