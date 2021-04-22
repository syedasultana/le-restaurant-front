import React from 'react';
import BasketItem from './BasketItem'

import serving from '..//Design/serving.jpg';
import Button from 'react-bootstrap/Button';

function CurrentOrder({ order, setOrder, loggedIn }) {
  //checks if the user is logged in to determine which view to display
  if (loggedIn) {
    return (
      <div>
        <h2 class="heading">Current Order</h2>
        <img src={serving} height="250" width="350"></img>
        {
          (order.length > 0)
          ? <div>{order.map((item, index) => (
            <BasketItem name={order[index].itemName} price={order[index].itemPrice} quantity={order[index].quantity} setOrder={setOrder} index={index} order={order}/>
            ))}
              <br />
              <h4>total: £{calculateTotal(order)}</h4>
              <Button variant="light">ORDER</Button>
            </div>
          : <div><h3>No items added to order</h3></div>

        }
      </div>
    )
  } else {
    return (
      <div>
        <h3>Please log in to view your current order</h3>
      </div>
    )
  }
  
}

function calculateTotal(orderArray) {
  const prices = orderArray.map(x => isolatePrices(x));
  const quantities = orderArray.map(x => isolateQuantities(x));

  let pXq = multiplyArrays(prices, quantities);

  let sum = pXq.reduce((a, b) => a + b, 0)
  
  return sum.toFixed(2);
}

function isolatePrices(item) {
  return item.itemPrice;
}

function isolateQuantities(item) {
  return item.quantity;
}

//helper function: multiplies the elements of an array to elements of another array at the same index
function multiplyArrays(arr1, arr2) {
  let arr1Copy = arr1;
  return arr1.map(x => specialMultiply(x, arr1Copy, arr2));
}

//helper function for multiplyArrays function
function specialMultiply(x, arr1Copy, arr2) {
  let index = arr1Copy.indexOf(x);
  let multiplicant = arr2[index];
  return x * multiplicant;
}


export default CurrentOrder;