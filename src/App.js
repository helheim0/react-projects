import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Atm from './Atm';
import Atm2 from './Atm2';
import Posts from './Posts';

function App() {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    setNumber(number + 1);
    setMessage("");
  }

  const decrement = () => {
    if(number -1 < 0){
      setMessage("Number cannot be less than 0!")
    }
    else {
    setNumber(number - 1);
    setMessage("");
  }
  }

  return (
    <div className="App">
      <header className="App-header App-header-first">
        <h2>Basic counter app!</h2>
      </header>
      <div>
        <h1 style={{color: "#f0932b"}}>Current number is: {number}</h1>
        <h1 style={{color: "#f0932b"}}>{message}</h1>
        <button className='my-button' onClick={increment}>+</button>
        <button className='my-button' onClick={decrement}>-</button>
      </div>
      <Atm2 />
      <Posts />
    </div>
  );
}

export default App;
