import React from 'react';
import Header from './Header'
import arrayOfShops from './Database'
import ShopContainer from './ShopContainer'
import './App.css';



class App extends React.Component {


  
  state = {
    shops: arrayOfShops
  }

  render() {
    
    return (
      <div className="App">
          <Header title="Sporty Shop"/>
          
          <ShopContainer shops = {this.state.shops} />

      </div>
    );
  }
}

export default App;
