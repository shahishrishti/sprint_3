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
              <input type="text" name="name" placeholder="Enter your name" />
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
            <table class="content-table">
                    <thead>
                        <tr>
                        <th scope="col">SrNo.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Journey Date</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Route</th>
                        <th scope="col">Vehicle No</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>26/01/2021</td>
                        <td>25/01/2021</td>
                        <td>Mumbai-Pune</td>
                        <td>MH-43-A-1234</td>
                        <td>Confirm</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Pat</td>
                        <td>28/01/2021</td>
                        <td>27/01/2021</td>
                        <td>Nashik-Nagpur</td>
                        <td>MH-43-C-2357</td>
                        <td>Confirm</td>
                        </tr>
                    </tbody>
                </table>
        </form>
        </div>
    );
}
