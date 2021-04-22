import React from 'react';
import { Link } from 'react-router-dom';

import background from '../Design/handsWithFood.jpg';

function NavBar({ loginData }) {


  let styles = {
    fontSize: '19px',
    padding: '0px',
    marginBottom: '10px',
    // border: '5px solid green'
  };

  let itemDesign = {
    padding: '5px',
    margin: '10px',
  };

    // if (loginData.admin) {
    //   return (
      //   <div class="topnav">
      //     <Link to="/" class="elements link">Home</Link>
      //     <Link to="/menu" class="elements link">Menu</Link>
      //     <Link to="/book-table" class="elements link">Table Bookings</Link>
      //     <Link to="/current-order" class="elements link">Current Orders</Link>
      //     <Link to="/contact-us" class="elements link">Contact Us</Link>
      // </div>
    //   )
    // } else {
      return (
        <div style={styles} class="navDesign">
          <img src={background} height="250" width="350"></img>

          <nav class="navbar navbar-expand-lg navbar-light bg-light center">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item" style={itemDesign}>
                  <Link to="/" class="elements link">Home</Link>
                </li>
                <li class="nav-item" style={itemDesign}>
                  <Link to="/menu" class="elements link">Menu</Link>
                </li>
                <li class="nav-item" style={itemDesign}>
                  <Link to="/book-table" class="elements link">Book Table</Link>
                </li>
                <li class="nav-item" style={itemDesign}>
                  <Link to="/current-order" class="elements link">Current Order</Link>
                </li>
                <li class="nav-item" style={itemDesign}>
                  <Link to="/contact-us" class="elements link">Contact Us</Link>
                </li>
              </ul>
            </div>
          </nav>


          


          
        </div>
      ); 
    //}
  }



export default NavBar;