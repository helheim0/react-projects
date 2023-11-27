import React, { useCallback, useEffect, useState } from 'react'
import './Atm.css';

function Atm(props) {
  const [balance, setBalance] = useState(0);
  const [input, setInput] = useState(props?.value ?? '');
  const [message, setMessage] = useState("");
  
  const checkBalance = async() => {
    setMessage(`Current balance is: ${balance}`);
  }

  const addMoney = () => {
    if(input.length !== 0){
    if(input % 5 !== 0){
      setMessage("Please insert a multiply of 5!");
    }else if(input === "0"){
      setMessage("Amount cannot be 0!");
    }
    else {
      setBalance( parseInt(input) + balance);
      console.log(balance);
      setMessage(`${input} successfully added to your account!`);
    }}
    else {
      setMessage("Please insert an amount you wish to add to your account!");
    }
  }

  const withdrawMoney = async() => {
    if(input.length !== 0){
    if(balance - input < 0) {
      setMessage("Insufficient balance!");
    }
    else if(input === "0"){
      setMessage("Withdrawal amount cannot be 0!");
    }
    else {
      setBalance(balance - input)
      setMessage(`${input} has been withdrawn from your account.`);
    }}
    else {
      setMessage("Please insert an amount you wish to withdraw from your account!");
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