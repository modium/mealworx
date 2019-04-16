import React from 'react';

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: props.restaurants,
      orders: {
        regular: 38,
        vegetarian: 5,
        glutenFree: 7,
        nutFree: 0,
        fishFree: 0
      },
      finalOrder: null
    }
  }

  optimizeOrders() {
    const { restaurants, orders } = this.state;

    // Sort restaurants by rating
    restaurants.sort(function(a, b) { return b.rating - a.rating });

    // Get total number of orders
    let total = 0;
    for (let order in orders) {
      total += orders[order];
    }
    if (total === 0) {
      alert('No orders were taken.');
      return;
    }

    let regular = orders.regular;
    let vegetarian = orders.vegetarian;
    let glutenFree = orders.glutenFree;
    let nutFree = orders.nutFree;
    let fishFree = orders.fishFree;

    let finalOrder = [];

    // Iterate over restaurants
    for (let i in restaurants) {

      finalOrder[i] = {
        name: restaurants[i].name,
        orders: restaurants[i].maxMeals
      };

      if (total - restaurants[i].maxMeals < 0) {
        finalOrder[i] = {
          name: restaurants[i].name,
          orders: total % restaurants[i].maxMeals
        };
      } else {
        total -= restaurants[i].maxMeals;
      }

      // finalOrder[i] = restaurants[i].name;
    }

    // alert(finalOrder);
    // console.log(finalOrder);
    this.setState({
      finalOrder
    })

    // console.log(total % restaurants[0].maxMeals);
    // console.log(regular);
    // console.log(vegetarian);
    // console.log(glutenFree);
    // console.log(nutFree);
    // console.log(fishFree);
  }

  render() {
    const { restaurants, orders, finalOrder } = this.state;

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
          <div className='row' style={{display: 'flex', justifyContent: 'space-around'}}>
            <button
              className='btn btn-primary'
              onClick={() => this.optimizeOrders()}
              style={{backgroundColor: '#f01616', borderStyle: 'none'}}
            >
              Optimize Orders
            </button>
          </div>
          <br />
          <div className='row'>
            <div className='col-12'>
              <h4>
                {finalOrder
                  ? finalOrder.map(order =>
                      <div className='row'>
                        <div className='col-6'>
                          {order.name}
                        </div>
                        <div className='col-6'>
                          {order.orders}
                        </div>
                      </div>
                    )
                    : 'No orders'}
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
