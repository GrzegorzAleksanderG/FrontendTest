import React from 'react';
import './App.css';
import ValidMathExp from './components/ValidMathExp';
import ParseUsingReduce from './components/ParseUsingReduce';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ValidMathExp/>
        <ParseUsingReduce/>
      </header>
    </div>
  );
}

export default App;
