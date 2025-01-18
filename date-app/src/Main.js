import './index.css';
import React, { useState } from 'react';
const days = ['Monday', 'Tuesday', '', '','','']

export default function Main (){
    const [step , setStep]= useState(1);
    const [count, setCount]= useState(0);
    
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
const date = new Date('June 12 2015');
date.setDate(date.getDate() + count);

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

        { count !==0 && count>0? 
            <h5>In {count} days it will be {date.toDateString()} </h5> :  <h5> {Math.abs(count)} days ago it was  {date.toDateString()} </h5>}
        </span>
</section>

        </div>
    )
}