import React from 'react';


function TableBooking({ bookingInfo }) {
    
    return (
    <div>
        <h4>Booking: {bookingInfo.booking_id}</h4>
        <p>user ID: {bookingInfo.user_id}</p>
        <p>Date: {bookingInfo.date}</p>
        <p>time: {bookingInfo.time}</p>
        <p>seating: {bookingInfo.seating_no}</p>
        <br />
    </div>
    ); 
   
  }

export default TableBooking;