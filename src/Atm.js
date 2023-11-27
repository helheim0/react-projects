import React, { useState } from 'react'
import './Atm.css';

function Atm(props) {
  const [balance, setBalance] = useState(0);
  const [input, setInput] = useState(props?.value ?? '');
  const [message, setMessage] = useState("");

  const checkBalance = async() => {
    setMessage(`Current balance is: ${balance}`);
  }

  const addMoney = async() => {
    if(input % 5 !== 0){
      setMessage("Please insert a multiply of 5!");
    }
    else {
      setBalance( parseInt(input) + balance);
      console.log(balance);
      setMessage(`${input} successfully added to your account!
       Current balance is: ${balance}`);
    }
  }

  const withdrawMoney = async() => {
    if(balance <= 0) {
      setMessage("Insufficient balance!");
    }
    else {
      setBalance(balance - input)
      setMessage(`Your current balance is: ${balance}`);
    }

    return message;
  }

  return (
    <div>
      <div className='App-header'>
        <h1>ATM</h1>
      </div>
        <div className='form-area'>
          <h3 className='balance'>{message} <br></br></h3>
          <form>
              <input type='text' placeholder='Enter amount' onInput={e => setInput(e.target.value)}/>
              <br></br>
              <button className='atm-button' onClick={checkBalance} type='button'>Check balance</button>
              <button className='atm-button' onClick={addMoney} type='button'>Add money</button>
              <button className='atm-button' onClick={withdrawMoney} type='button'>Withdraw money</button>
          </form>
        
        </div>
    </div>
  )
}

export default Atm