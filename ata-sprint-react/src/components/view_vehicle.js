import React from 'react';
import '../css/view_vehicle.css'
export const ViewVehicleComponent = (props) => {
    return(
        <body>
             <div class="testbox">
                <form action="/">
                   <div class="banner">
                      <h1>View Vehicle</h1>
                   </div>
                   <div class="item">
                     <p>View vehicle with</p>
                       <select required>
                          <option value="1">View All vehicles</option>
                          <option value="2">Vehicle No.</option>
                          <option value="3">Vehicle Name</option>
                          <option value="4">Vehicle Fare per km</option>
                       </select>
                   </div>
                   <div class="btn-block">
                      <button type="submit" href="/">View</button>
                   </div>
                   <table class="center">
                     <tr>
                       <th>Vehicle No</th>
                       <th>Vehicle Name</th>
                       <th>Vehicle Type</th>
                       <th>Seating Capacity</th>
                       <th>Fare per Km</th>
                       <th>Route</th>
                       <th>Action</th>
                     </tr>
                     <tr>
                       <td>MH 50 AX 4440</td>
                       <td>Suzuki</td>
                       <td>Car</td>
                       <td>4</td>
                       <td>40</td>
                       <td>Mumbai-Pune</td>
                       <td><button type="submit" href="#">Edit</button><button type="submit" href="#">Delete</button></td>
                     </tr>
                     <tr>
                       <td>MH 50 AX 2345</td>
                       <td>Tata</td>
                       <td>Bus</td>
                       <td>20</td>
                       <td>30</td>
                       <td>Delhi-Nashik</td>
                       <td><button type="submit" href="#">Edit</button>&nbsp;<button type="submit" href="#">Delete</button></td>
                     </tr>
                   </table>
                  
                    
                </form>
             </div>
        </body>
    );
    
}