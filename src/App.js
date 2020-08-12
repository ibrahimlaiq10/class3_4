import React ,{useState} from 'react';
import './App.css';
import Hotel from "./hotel"
import Message from "./message"

function App() {
  let [count,setCount]=useState(0)
  let [ismorning,setIsMorning]=useState(true)
 
  return (
    <div className={`box ${ismorning?"":"isday"} `}>
      <h1 >Class 3 Assignment</h1>
     <Hotel/>
     <hr/>
     <h1>Class 4 Assingment</h1>
     
     <Message value={count} morning={ismorning}/>
     <button onClick={()=>{
        setIsMorning(!ismorning)
     }}>Change to {ismorning?"Night":"Morning"} </button>
     <button onClick={()=>{
        setCount(++count)
     }}>Click to Increment </button>
    </div>
  );
}

export default App;
