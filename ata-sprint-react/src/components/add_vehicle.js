import React from 'react';
import Select from 'react-select';

export const AddVehicleComponent = (props) =>{
    return (
     <body>
        <div class="testbox">
            <form action="/">
              <div class="banner">
                 <h1>Add Vehicle</h1>
              </div>
              <div class="item">
                 <p>Vehicle name</p>
                  <div class="name-item">
                    <input type="text" name="name" placeholder="Enter vehicle name" />
                  </div>
              </div>
              <div class="item">
               <p>Vehicle Type</p>
                 <select required>
                    <option value="1">Car</option>
                    <option value="2">Bus</option>
                 </select>
             </div>
             
               <div class="name-item">
                  <p>Vehicle No.</p>
                  <input type="text" name="vehicle_no" placeholder="Enter vehicle No." />
               </div>
               <div class="item">
                  <input type="number" name="fare_per_km" placeholder="Enter Fare Per Km" step="1"></input>
               </div>
             <div class="item">
               <p>Route</p>
                 <select required>
                    <option value="1">Mumbai-Pune</option>
                    <option value="2">Pune-Mumbai</option>
                    <option value="3">Nashik-Nagpur</option>
                    <option value="4">Nagpur-Nashik</option>
                    <option value="5">Mumbai-Surat</option>
                    <option value="6">Surat-Mumbai</option>
                 </select>
             </div>
     
        <div class="btn-block">
          <button type="submit" href="/">ADD</button>
        </div>
            </form>
        </div>
     </body>
  
  );

}