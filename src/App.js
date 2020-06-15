import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './messgae.js'

function App() {

  let [count , setCount] = useState(0);
  let [isMorning , setMorning] = useState(true);
  return (
    
    <div className={`${isMorning ? 'dayLight' : 'box'}`}>
      
      <h1>
        Counter Application
      </h1>

      <p> GOOD  {isMorning ? 'MORNING' : 'NIGHT'}  </p>
      
      <Message counterValue = {count} createrName = 'MAHAD' />
      
      
      <button onClick= { ()=> setCount(++count) } >Increase counter</button>
      <button onClick= { ()=> setCount(--count) } >Decrease counter</button>
      <button onClick= { ()=> setCount(0) } >reset counter</button>
      <br/>
      {/* <button onClick= { ()=> `${isMorning ? setMorning (false) : setMorning (true)}` } > Change day time </button> */}
      <button onClick= { ()=> setMorning(!isMorning) }> Change day time </button>
    </div>
  );
}

export default App;
