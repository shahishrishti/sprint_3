import React from 'react';
import '../css/cancel_booking.css'
export const CancelBookingComponent = (props) =>{

   return(
     <body>
       <div class="testbox">
    <form action="/">
      <div class="banner">
        <h1>Cancel Booking</h1>
      </div>
      <div class="item"></div>
        <p>Booking Id</p>
        <div class="Id">  
        <input type="text" name="id" placeholder="Enter your id" />
          <input type="submit" name="submit" class="submit" value="Search"/>
          </div>
         <div class="item">
        <p>Boarding Point</p>
        <input type="text" name="boarding point"/>
      </div>
      
      <div class="item">
        <p>Drop Point</p>
        <input type="text" name="drop point" />
      </div>
     
      <div class="item">
        <p>Journey Date</p>
        <input type="date" name="journeydate" placeholder="enter the date"></input>
      </div>

      <div class="item">
        <p>Contact No.</p>
        <input type="text" name="phone" placeholder="### ### ####"/>
      </div>

        <div class="btn-block">
          <button type="submit" href="/">Cancel Booking</button>
        </div>
        </form>
        </div>
        </body>
   );
      }