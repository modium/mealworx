import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Orders from './components/Orders';

var restaurants = [
  {
    name: "Earl's",
    rating: 5,
    maxMeals: 40,
    maxVeg: 4,
    maxGluten: 0,
    maxNut: 0,
    maxFish: 0
  },
  {
    name: 'JOEY',
    rating: 3,
    maxMeals: 100,
    maxVeg: 20,
    maxGluten: 20,
    maxNut: 0,
    maxFish: 0
  }
];

const FinalOrder = (props) => (
  <div>
    <h3>{props.order}</h3>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: null
    }
  }

  render() {
    const { orders } = this.state;
    return (
      <div className='container-fluid'>
        <Navbar />
        <div className='row'>
          <div className='col-sm-6'>
            <Restaurants restaurants={restaurants} />
          </div>
          <div className='col-sm-6'>
            <Orders restaurants={restaurants} />
          </div>
        </div>

        <br />

        <div className='row'>
          <div className='col-12'>
            {/* <FinalOrder order='50 meals' /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
