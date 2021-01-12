import React from 'react';
import '../css/view_booking.css';

export const ViewBookingComponent = (props) => {
     return(
        <body>
            <div class="testbox">
                <form action="/">
                    <div class="banner">
                        <h3>View Booking</h3>
                    </div>
            <div class="item">
            <table id="customers">
                  <tr>
                     <th>Booking ID</th>
                     <th>UserID</th>
                     <th>Route ID</th>
                     <th>Journey Date</th>
                     <th>Booking Date</th>
                     <th>Cancel Date</th>
                     <th>Booking Status</th>
                     <th>Vehicle Type</th>
                     <th>Fare</th>
                </tr>
                </table>
                </div>
            </form>
          </div>
      </body>
    ); 
}  