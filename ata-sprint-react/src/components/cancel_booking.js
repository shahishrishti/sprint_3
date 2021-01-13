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
<<<<<<< HEAD
        <input type="text" name="boarding point"/>
=======
        <select required>
          <option value="1">Mumbai</option>
          <option value="2">Pune</option>
          <option value="3">Nashik</option>
          <option value="4">Nagpur</option>
          <option value="5">Goa</option>
          <option value="6">Surat</option>
        </select>
>>>>>>> e2258c2189433815bd9282b09d61e1c77bc5281a
      </div>
      
      <div class="item">
        <p>Drop Point</p>
<<<<<<< HEAD
        <input type="text" name="drop point" />
=======
        <select required>
          <option value="1">Surat</option>
          <option value="2">Pune</option>
          <option value="3">Mumbai</option>
          <option value="4">Nagpur</option>
          <option value="5">Goa</option>
          <option value="6">Nashik</option>
        </select>
>>>>>>> e2258c2189433815bd9282b09d61e1c77bc5281a
      </div>
     
      <div class="item">
        <p>Journey Date</p>
<<<<<<< HEAD
        <input type="date" name="journeydate" placeholder="enter the date"></input>
=======
        <input type="date" id="journeydate" name="journeydate"></input>
>>>>>>> e2258c2189433815bd9282b09d61e1c77bc5281a
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