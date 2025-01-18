import { useState } from "react"
export default function Main(){
    const [step,setStep]= useState(1);
    const [count, setCount]= useState(0)
    
    function handleChangeStep(e){
        e.preventDefault();
    }
     function handleIncCurrent(){
        setCount((c)=> c+Number(step))
     }
     function handleDecCurrent(){
        setCount((c)=> c- Number(step))

     }
     function handleReset(){
        setCount(0);
        setStep(1)
     }
     const date = new Date('June 12 2015');
     date.setDate(date.getDate() + count);

    return (
        <div className="date-container">
        <section style={{marginTop:'2px', display:'flex',justifyContent:'center'}}>
            <form style={{marginTop:'40px'}} onChange={handleChangeStep}>
            <input
      type="range"
      id="slider"
      min="1"
      max="100"
    //   value=""
    value={step} onChange={(e)=> setStep(e.target.value)}
      step="1" />  
      <label>Step {step}</label> 
             </form >
             </section > 

             <section style={{marginTop:'40px'}}>
                <input style={{marginLeft:'25%'}} value={count} onChange={(e)=>setCount(Number(e.target.value))}/>
            <button style={{marginLeft:'15%'}} onClick={handleIncCurrent}>
                Increase
            </button>
            <button style={{marginLeft:'15%'}} onClick={handleDecCurrent}>
                Decrease
            </button>
            <button style={{marginLeft:'15%',backgroundColor:'red'}} onClick={handleReset}>
                Reset
            </button>
             </section>
             <section style={{marginTop:'40px'}}>
                <h3 style={{marginLeft:'30px'}}>{ count===0 ? `Today is ${date.toDateString()}` :count>0 ?` In ${count} days it will be ${date.toDateString()}`:`${count} days ago it was ${date.toDateString()}` }  </h3>
             </section>
        </div>

    )
}