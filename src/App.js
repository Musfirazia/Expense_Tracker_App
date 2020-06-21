import React from 'react';
import Child from './Child.js';
import './App.css';

 import {TransactionProvider} from './transContext';
function App() {
  return (
  <TransactionProvider>
    <div className="App">
      <Child/>
    </div>
    </TransactionProvider>
  );
  
}

export default App;
