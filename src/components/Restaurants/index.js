import React from 'react';

var styles = {
  table: {
    border: '2px solid #f01616'
  }
}

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: props.restaurants
    }
  }

  render() {
    const { restaurants } = this.state;
    
    return (
      <div className='row'>
        <div className='col-12'>
          <h1>Restaurants</h1>
          {restaurants.map(restaurant =>
            <div key={restaurant.name} className='row' style={{border: '2px solid #f01616', margin: 15, paddingTop: 10}}>
              <div className='col-6'>
                <h3>{restaurant.name}</h3>
                <h5>Rating: {restaurant.rating}/5</h5>
              </div>
              <div className='col-12' style={{overflowX: 'auto', paddingBottom: 15}}>
                <table>
                  <thead>
                    <tr>
                      <th>Maximum orders</th>
                      <th>Vegetarian</th>
                      <th>Gluten free</th>
                      <th>Nut free</th>
                      <th>Fish free</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{restaurant.maxMeals}</td>
                      <td>{restaurant.maxVeg}</td>
                      <td>{restaurant.maxGluten}</td>
                      <td>{restaurant.maxNut}</td>
                      <td>{restaurant.maxFish}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
