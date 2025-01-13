import React, { useState } from 'react';
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
function App() {
  const [step,setStep]= useState(1)
  const [display,setDisplay]= useState(false)
  function handleClose(){
setDisplay(!display)
  }
  function  handlePrevious(){
// In order to use state we have 3 parts 
  //  add state 
  //  use state 
  //  update the state    
 if( step>1 ){
 setStep(step-1)
  }
}
  function handleNext(){
if( step<3){
  setStep(step+1)
   }
  }
  function handleReset(){
    setStep(1)
  }
  if(display){
    return (
      <div className="steps">
     <div className='numbers'>
   <div className={step>=1 ?'active':'' }>1</div>
   <div className={step>=2 ?'active':'' }> 2</div>
   <div className={step>=3 ?'active':'' }> 3</div>
     </div>
     <p className='message'>Step {step}: {messages[step-1]} </p>
     <div className='buttons'>
  <button style={{backgroundColor:'#7950f2',color:'white'}} onClick={handlePrevious}>Previous</button>
  <button style={{backgroundColor:'#7950f2',color:'white'}} onClick={handleNext}>Next</button>
  <button style={{backgroundColor:'Red',color:'white'}} onClick={handleReset}>Reset</button>
  <button className='close' onClick={handleClose}>X</button>
  </div>
  
      </div>
    );  
  }else {
    return (
      <button className='close' onClick={handleClose} style={{fontSize:'18px'}}>x</button>

    )
  }
 
}

export default App;
