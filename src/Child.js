import React, { useContext, useState } from 'react'
import {TransactionContext} from './transContext.js';
function Child() {
let {transactions,addTransaction,deleteTransaction}=useContext(TransactionContext);
console.log(transactions);
let[newDesc,setDesc] =useState("");
let[newAmount,setAmount] =useState(0);
let[newId,setId] =useState(0);
const handleAddition=(event)=>{
    event.preventDefault()
    if(Number(newAmount) === 0){
        alert("Please enter correct value");
         return false;
    }
    addTransaction({id:newId,amount:newAmount,desc:newDesc})
    setDesc("");
    setAmount(0);
    setId(++newId);
}
  const getIncome=()=>{
      let income=0;
      for(var i=0;i<transactions.length;i++)
  {
      if(transactions[i].amount >0)
      {
          income +=transactions[i].amount
      }
     } return income
  } 
  const getExpense=()=>{
    let expense=0;
    for(var i=0;i<transactions.length;i++)
{
    if(transactions[i].amount < 0)
    {
        expense +=transactions[i].amount
    }
    
}
return expense;
} 
return (
        <div className="container">
            <h1>Expense Tracker</h1>
            <h3>Your Balance:<p>{getIncome()+getExpense()}</p></h3>

            <div className="expense-container">
                <h3>INCOME: <span id="income">{getIncome()}</span></h3>
                <h3>EXPENSE:<span id="expense">{getExpense()}</span></h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj,ind)=>{
                    return(<li key={transObj.id}><span>{transObj.desc}</span>
                    <span>{transObj.amount}</span><button onClick={() => {console.log(transObj.id);deleteTransaction(transObj.id)}} className="delete-btn">x</button>
                    </li>)
                })}

            <h3>Add New Transactions</h3>
            <hr />
    
<br/>

            </ul>
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br />
                    <input type="text"  placeholder="Enter your description"  value={newDesc} onChange={(ev)=>setDesc(ev.target.value)} required />
                </label>
                <label>
                    Enter Amount <br />
                    <input type='number' placeholder="Enter Amount" value={newAmount} onChange={(ev)=>setAmount(ev.target.value)} required/>
                </label>
                <br />
                <input type="submit" id="submitbutton" className="transaction-form" value="Add Transaction" />
            </form>
        </div>

    )
}
export default Child;