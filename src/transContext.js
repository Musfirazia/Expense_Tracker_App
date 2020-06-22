import React, { createContext } from 'react';
import { useReducer } from 'react';
import TransactionReducer from './transReducer';
const initialTransactions = []
export const TransactionContext = createContext(initialTransactions);
export const TransactionProvider = (({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    function addTransaction(transObj) {
        dispatch({
            type: 'Add_Transaction',
            payload: {
                id:transObj.id,
                amount: Number(transObj.amount),
                desc: transObj.desc
            },
        })
    }
    function deleteTransaction(id) {
        dispatch({
          type: 'Del_Transaction',
          payload: id
        });
      }
   
    return (<TransactionContext.Provider value={{
        transactions: state,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </TransactionContext.Provider>)
})