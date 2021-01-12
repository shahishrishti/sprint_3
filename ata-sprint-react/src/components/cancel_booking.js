import React from 'react';

export class CancelBookingComponent extends React.Component {
    render() {
       <div class="testbox">
    <form action="/"></form>
      <div class="banner">
        <h1>Cancel Booking</h1>
      </div>
      <div class="item"></div>
        <p>Booking Id</p>
        <div class="Id">  <input type="text" name="id" placeholder="Enter your id" />
          <input type="submit" name="submit" class="submit" value="Search"/>
          </div>
         
         
        

      <div class="item">
        <p>Boarding Point</p>
        <select required>
          <option value="1">Mumbai</option>
          <option value="2">Pune</option>
          <option value="3">Nashik</option>
          <option value="4">Nagpur</option>
          <option value="5">Goa</option>
          <option value="6">Surat</option>
        </select>
      </div>
      
      <div class="item">
        <p>Drop Point</p>
        <select required>
          <option value="1">Surat</option>
          <option value="2">Pune</option>
          <option value="3">Mumbai</option>
          <option value="4">Nagpur</option>
          <option value="5">Goa</option>
          <option value="6">Nashik</option>
        </select>
      </div>
     
      <div class="item">
        <p>Journey Date</p>
        <input type="date" id="journeydate" name="journeydate"></input>
      </div>

      <div class="item">
        <p>Contact No.</p>
        <input type="text" name="phone" placeholder="### ### ####"/>
      </div>

        <div class="btn-block">
          <button type="submit" href="/">Cancel Booking</button>
        </div>
        </div>
        }
      }