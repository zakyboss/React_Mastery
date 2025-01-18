import React, { useState } from 'react';
const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];
function App() {
  const [step,setStep]= useState(1)
  const [display,setDisplay]= useState(true)
  function handleClose(){
setDisplay(!display)
  }
  function  handlePrevious(){
// In order to use state we have 3 parts 
  //  add state 
  //  use state 
  //  update the state    
 if( step>1 ){
 setStep(s=> s-1)
  }
}
  function handleNext(){
if( step<3){
  setStep(s=> s+1)
}
  }
  function handleReset(){
    setStep(s=> s=1)
  }
  if(display){
    return (
      <div className="steps">
     <div className='numbers'>
   <div className={step>=1 ?'active':'' }>1</div>
   <div className={step>=2 ?'active':'' }> 2</div>
   <div className={step>=3 ?'active':'' }> 3</div>
     </div>
   <StepMessage  step={step}> 
   <p className='message'> {messages[step-1]} </p>
   </StepMessage>
   
     <div className='buttons'>
<Button bgColor='#7950f2'  textColor='white' onClick={handlePrevious}><span>👈</span>Previous</Button>
<Button bgColor='#7950f2'  textColor='white' onClick={handleNext} >Next <span>👉</span>
  </Button>
<Button bgColor='red'  textColor='white' onClick={handleReset} >Reset
  </Button>
  </div>
  </div> 
    );  
  }else {
    return (
      <button className='close' onClick={handleClose} style={{fontSize:'18px'}}>x</button>

    )
  }
 
}

function Button ({textColor, bgColor,onClick,children}){
return (
  <button style={{backgroundColor:bgColor,color:textColor}} onClick={onClick}>{children}</button>
)
}
function StepMessage({step,children}){
return (
  <div>
     <h1>Step {step}</h1>
    {children}
  </div>
)
}
export default App;
