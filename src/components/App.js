import React from 'react';
import Header from './Header';
import Order from './Order' ;
import Inventory from './Inventory';

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    //initial state
    this.state = {
        fishes: {},
        order: {}
    }
     
  }
  addFish(fish) {
    //get a copy of our current state
    const fishes = {...this.state.fishes};
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    //set state for the new fish only
    this.setState({fishes: fishes});
  }
  render() {
    return (
      <div className='catch-of-the-day'>
         <div className='menu'>
           <Header tagline='Fresh seafood market' />
         </div>
         <Order />
         <Inventory addFish={this.addFish}/> 
      </div> 
    );
  }
}

export default App;