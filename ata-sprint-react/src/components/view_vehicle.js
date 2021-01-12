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
                   <table class="content-table">
                    <thead>
                        <tr>
                        <th scope="col">SrNo.</th>
                        <th scope="col">Vehicle Name</th>
                        <th scope="col">Vehicle No.</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Seating Capacity</th>
                        <th scope="col">Fare per Km</th>
                        <th scope="col">Route</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        
                        <td>Suzuki</td>
                        <td>MH 01 AX 1234</td>
                        <td>Car</td>
                        <td>4</td>
                        <td>40</td>
                        <td>Mumbai-Pune</td>
                        <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Tata</td>
                        <td>MH 50 AB 2643</td>
                        <td>Bus</td>
                        <td>20</td>
                        <td>30</td>
                        <td>Pune-Mumbai</td>
                        <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Swift</td>
                        <td>MH 12 XD 2748</td>
                        <td>Car</td>
                        <td>4</td>
                        <td>40</td>
                        <td>Pune-Mumbai</td>
                        <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                  
                    
                </form>
             </div>
        </body>
    );
    
}