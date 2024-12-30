import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
function App() {
  const [step,setStep]= useState(1)
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
  return (
    <div className="steps">
   <div className='numbers'>
 <div className={step>=1 ?'active':'' }>1</div>
 <div className={step>=2 ?'active':'' }> 2</div>
 <div className= {step>=3 ?'active':'' }> 3</div>
   </div>
   <p className='message'>Step {step}: {messages[step-1]} </p>
   <div className='buttons'>
<button style={{backgroundColor:'#7950f2',color:'white'}} onClick={handlePrevious}>Previous</button>
<button style={{backgroundColor:'#7950f2',color:'white'}} onClick={handleNext}>Next</button>
   </div>
   
    </div>

  );
}

export default App;
