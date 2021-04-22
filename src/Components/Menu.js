import React from 'react';
import MenuSection from './MenuSection';

import axios from "axios";

function Menu({ order, setOrder, loggedIn }) {
  const [menuData, setMenuData] = React.useState('');
  const [courses, setCourses] = React.useState('');
  const [items, setItems] = React.useState('');

  //GET request made to database to retrieve all menu items
  React.useEffect(() => {
    axios
      .get(
          `http://localhost:3100/items`, 
      )
      .then(response => {
          console.log(response)
          setMenuData(response.data);
          let _courses = response.data.map(x => isolateCourses(x));
          _courses = removeDuplicates(_courses);
          setCourses(_courses);

      })
      .catch(err => {
          console.log(err)
      });
  }, [setMenuData])

  //checking if backend data is recieved - to determine which view to display
  if (menuData !== '') {
    if (courses.length > 0) {
      return (
        <div>
            <h2 class="heading">The Menu</h2>
            <div>{courses.map((course, index) => (
              <MenuSection name={course} items={itemsUnderCourse(course, menuData)} order={order} setOrder={setOrder} loggedIn={loggedIn}/> 
            ))}
            </div>

        </div>
      )
    } else {
      return (
        <></>
      )
    }
    
  } else {
    return (
      <div>
          <h2>Menu with hardcoded data</h2>
          <MenuSection name={'Starter'} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          <MenuSection name={'Main'} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          <MenuSection name={'Sides'} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          <MenuSection name={'Drinks'} order={order} setOrder={setOrder} loggedIn={loggedIn}/>
      </div>
    ); 
  }
    
  
   
}

function isolateCourses(datum) {
  return datum.course;
}

//helper function for specific task
function removeDuplicates(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

function itemsUnderCourse(course, data) {
  let itemsFound = data.map(datum => itemUnderCourse(datum, course));
  itemsFound = cleanArray(itemsFound); //remove undefineds from itemsFound
  return itemsFound;
}

//helper function for specific task
function itemUnderCourse(datum, course) {
  if (datum.course == course) {
    let foundItem = {name: datum.name, price: datum.price};
    return foundItem;
  }
}

//helper function for specific task
function cleanArray(arr) {
  return arr.filter(element => typeof element === 'object');
}


export default Menu;