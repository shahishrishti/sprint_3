import React from 'react';
import '../css/add_booking.css'

export const ViewBookingByNameAndStatusComponent = (props) =>{
    return (
        <div class="testbox">
        <form >
          <div class="banner">
            <h1>View Booking By Username and Status </h1>
          </div>
          <div class="item">
            <p>Passenger User name and Status</p>
            <div class="name-item">
              <input type="text" name="name" placeholder="Enter your name" />
            </div>
          </div>
          <div class="item">
              <p>Booking Status</p>
              <select required>
                <option value="1">Confirm</option>
                <option value="2">Pending</option>
              </select>
          </div>
            <div class="btn-block">
              <button type="submit" >View</button>
            </div>
        </form>
        </div>
    );
}
