import React from 'react';

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: props.restaurants,
      orders: {
        regular: 0,
        vegetarian: 0,
        glutenFree: 0,
        nutFree: 0,
        fishFree: 0
      }
    }
  }

  optimizeOrders() {

  }

  render() {
    const { restaurants, orders } = this.state;

    console.log(restaurants);

    return (
      <div className='row'>
        <div className='col-12'>
          <h1>Orders</h1>

          <div className='row'>
            <div className='col-6'>
              <h4>Regular</h4>
            </div>
            <div className='col-6'>
              <input
                type='number'
                value={orders.regular}
                onChange={event => this.setState({orders: { ...orders, regular: event.target.value}})}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h4>Vegetarian</h4>
            </div>
            <div className='col-6'>
              <input
                type='number'
                value={orders.vegetarian}
                onChange={event => this.setState({orders: { ...orders, vegetarian: event.target.value}})}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h4>Gluten Free</h4>
            </div>
            <div className='col-6'>
              <input
                type='number'
                value={orders.glutenFree}
                onChange={event => this.setState({orders: { ...orders, glutenFree: event.target.value}})}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h4>Nut Free</h4>
            </div>
            <div className='col-6'>
              <input
                type='number'
                value={orders.nutFree}
                onChange={event => this.setState({orders: { ...orders, nutFree: event.target.value}})}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <h4>Fish Free</h4>
            </div>
            <div className='col-6'>
              <input
                type='number'
                value={orders.fishFree}
                onChange={event => this.setState({orders: { ...orders, fishFree: event.target.value}})}
              />
            </div>
          </div>
          <br />
          <div className='row'>
            {/* <ul>
              <li>Regular: {orders.regular}</li>
              <li>Vegetarian: {orders.vegetarian}</li>
              <li>Gluten Free: {orders.glutenFree}</li>
              <li>Nut Free: {orders.nutFree}</li>
              <li>Fish Free: {orders.fishFree}</li>
            </ul> */}
          </div>
        </div>
      </div>
    );
  }
}
