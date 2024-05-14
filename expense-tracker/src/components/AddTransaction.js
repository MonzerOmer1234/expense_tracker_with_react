import React, { useState , useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export const AddTransaction = () => {
    const [text , setText] = useState("");
    const [amount , setAmount] = useState(0);
    const {addTransaction } = useContext(GlobalContext)

    function textChangeHandler(event){
        setText(event.target.value);
    }
    function amountChangeHandler(event){
        setAmount(event.target.value);
    }
    function handleSubmit(event){
       event.preventDefault();
       const newTransaction = {
        id : Math.random() *  100000,
        text , 
        amount : +amount , 


       }
       addTransaction(newTransaction)
       
    }
   

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={textChangeHandler}  placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" onChange={amountChangeHandler} value={amount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
