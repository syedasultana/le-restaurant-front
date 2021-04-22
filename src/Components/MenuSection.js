import React from 'react';
import Item from './Item'

function MenuSection({ name, order, setOrder, items, loggedIn }) {

  //checks if items from the database are retrieved to determine which view to display
  if (items) {
    if (items.length > 0) {
      return (
        <>
          <h2 class="coursesDesign">{name}</h2>
          <div>{items.map((item, index) => (
            <Item name={item.name} price={item.price} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          ))}
          </div>
        </>
      )
    } else {
      return (
        <></>
      )
    }
    
  } else {
     return (
      <div>
          <h2>{name} with hardcoded data</h2>
          <Item name={'Dough Balls'} price={4.99} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          <Item name={'Garlic Pizza Bread '} price={4.59} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          <Item name={'Garlic Pizza Bread with Mozzarella'} price={4.99} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          <Item name={'Garlic Bread with Vegan Mozzarella '} price={4.99} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
      </div>
    ); 
  }
   
   
  }

export default MenuSection;