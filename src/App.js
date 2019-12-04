import React from 'react';
import Counter from './components/conuter';
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Licznik React</h1>
      </header>
      <Counter initValue="108"/>
    </div>
  );
}

export default App;
