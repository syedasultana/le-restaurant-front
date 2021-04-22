import React from 'react';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import TableBooking from './TableBooking';
import axios from "axios";
import { useParams } from 'react-router-dom';

import tables from '..//Design/tables.jpg';
import Button from 'react-bootstrap/Button';

function BookTable({ loggedIn, loginData }) {
  const [chosenDate, setChosenDate] = React.useState();
  const [chosenTime, setChosenTime] = React.useState();
  const [seatingNo, setSeatingNo] = React.useState();
  const [existingBookings, setExistingBookings] = React.useState([]); //for user
  const [allBookings, setAllBookings] = React.useState([]); //for admin

  let style = {
    backgroundColor: '#2ec4b6'
  };

  let imgStyle = {
    margin: '20px'
  };

  if (loggedIn) {
    console.log('is admin: ', loginData.admin)
    if (loginData.admin != undefined || loginData.admin) {
      //GET request to database, bookings table
      axios
        .get(
            `http://localhost:3100/bookings`, 
        )
        .then(response => {
            console.log(response)
            setAllBookings(response.data);
        })
        .catch(err => {
            console.log(err)
        });
      
      if (allBookings != '') {
        return (
          <div>
            <h2 class="heading">Table Bookings Admin View</h2>
            <div>{allBookings.map((booking, index) => (
              <TableBooking bookingInfo={booking}/>
            ))}
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <h2 class="heading">Table Bookings Admin View</h2>
            <h3>No table bookings exist</h3>
          </div>
        )
      }
    } else {
    //IF BOOKINGS ALREADY EXIST THEN DISPLAY THEM HERE, USING TERNARY OPERATOR
    //do the axios call, if found then populate existingBookings 
    //use ternary operator to display bookings by checking if existingBookings is a populated or empty array
    //getUsersBookings(setExistingBookings, loginData.user_id);
      return (
        <div style={style}>
            <h2 class="heading">Book Table</h2>
            <img src={tables} height="400" width="600" style={imgStyle}></img>
            <div class="Form">
              <div>
                <p>Select a date:</p>
                <br />
                <DatePicker chosenDate={chosenDate} setChosenDate={setChosenDate}/>
              </div>
              <br />
              <div>
                <p>Select a time:</p>
                <br />
                <TimePicker chosenTime={chosenTime} setChosenTime={setChosenTime}/>
              </div>
              <br />
              <div>
                <p>Enter your seating number:</p>
                <input 
                  placeholder="e.g 5"
                  onChange={(event) => {
                    setSeatingNo(event.target.value);
                  }}
                  value={seatingNo}
                />
                <br />
              </div>
              <br />
              <Button
                variant="light"
                onClick={() => {
                  handleSubmit(chosenDate, chosenTime, seatingNo, loginData.user_id, setChosenDate, setChosenTime, setSeatingNo);
                }}
                >BOOK
              </Button> 
            </div>


        </div>
      );
    } 
  } else {
    return (
      <div>
        <h3>Please log in to book a table</h3>
      </div>
    )
  }
}

async function getUsersBookings(setExistingBookings, user_id) {
  //Get request to database, bookings table - to retrieve an individual booking by ID
  const response = await axios
    .get(
        `http://localhost:3100/user-bookings/`, {
            params: {
                user_id: user_id
            }
        }
    )
    .then(response => {
        console.log(response)
        setExistingBookings(response.data);
    });
}




async function handleSubmit(chosenDate, chosenTime, seatingNo, userId, setChosenDate, setChosenTime, setSeatingNo) {
  //console.log('POST Request', chosenDate, chosenTime, seatingNo, userId);
  //POST request to database, bookings table - to create a booking
  const response = await axios
    .post(
        `http://localhost:3100/booking?user_id=${userId}&date=${chosenDate}&time=${chosenTime}&seating_no=${seatingNo}`, 
    )
    .then(response => {
      console.log(response);
      //reset form
      setChosenDate('no date');
      setChosenTime('no time');
      setSeatingNo(undefined);
    })
    .catch(err => {
        console.log(err)
    });

}

export default BookTable;