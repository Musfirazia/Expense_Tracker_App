import  React,{createContext}  from 'react';
import  { useReducer } from 'react';
import TransactionReducer from './transReducer';
const initialTransactions=[
    {
        amount: 500,desc: "cash"
    },
    {
        amount: -68,desc: "Book"
    },
    {
        amount: -200,desc: "camera"
    }
]
export const TransactionContext=createContext(initialTransactions);
export const TransactionProvider=(({children})=>{
    let [state,dispatch] =useReducer(TransactionReducer,initialTransactions);
function addTransaction(transObj){
    dispatch({type:'Add_Transaction',
    payload:{
        amount:Number(transObj.amount),
        desc:transObj.desc
    },
})
}
return(<TransactionContext.Provider value={{
    transactions:state,
    addTransaction
}}>
  {children}  
</TransactionContext.Provider>)
})