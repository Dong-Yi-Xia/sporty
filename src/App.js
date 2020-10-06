import React from 'react';
import Header from './Header'
import Store from './Store'
import './App.css';



function App() {
  return (
    <div className="App">
        <Header title="Sporty Shop"/>
        
        <ul>
          <Store sportName="Tennis"/>
          <Store sportName="Basketball"/>
          <Store sportName="Soccer"/>
        </ul>

    </div>
  );
}

export default App;
