
const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "Add_Transaction": {

            return [action.payload, ...state]
        }

        case "Del_Transaction": {
          const  newtransactions = state.filter(transaction => transaction.id !== action.payload)
         return newtransactions;
        }
           
    
        default:
return state;
    }
    
})
export default TransactionReducer;