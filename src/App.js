import React from 'react';
import './App.css';

import Menu from './Components/Menu';
import BookTable from './Components/BookTable';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import CurrentOrder from './Components/CurrentOrder';
import NavBar from './Components/NavBar'
import Login from './Components/Login';

import logo from './Design/restaurant.png';

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useHistory
} from "react-router-dom";


function App() {
  const [order, setOrder] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loginData, setLoginData] = React.useState();

  return (
    <div className="App">

      <div class="container-1">
        
        <div class="header box-1">
          <img src={logo} height="200" width="300"></img>
          <h3 id="title">Welcome to the website of Le Restaurant</h3>
        </div>

        <div class="box-2">
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setOrder={setOrder} loginData={loginData} setLoginData={setLoginData}/>
        </div>

      </div>



      <br />
      
      <Router>
        <NavBar loginData={loginData}/>
        <Switch>
        <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/current-order">
            <CurrentOrder order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          </Route>
          <Route path="/book-table">
            <BookTable loggedIn={loggedIn} loginData={loginData}/>
          </Route>
          <Route path="/menu">
            <Menu order={order} setOrder={setOrder} loggedIn={loggedIn}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    

      


    </div>
  );
}

export default App;
