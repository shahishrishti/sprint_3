import React from 'react';
import '../css/modify_vehicle.css'
export const ModifyVehicleComponent = (props) =>{
    return (
     <body>
        <div class="testbox">
            <form action="/">
              <div class="banner">
                 <h1>Edit Vehicle</h1>
              </div>
              <div class="item">
                  <p>Vehicle No.</p>
                  <input type="text" name="vehicle_no" placeholder="Enter vehicle No." />
               </div>
              <div class="item">
                 <p>Vehicle name</p>
                  <input type="text" name="name" placeholder="Enter vehicle name" />
              </div>
              <div class="item">
               <p>Vehicle Type</p>
                 <select required>
                    <option value="1">Car</option>
                    <option value="2">Bus</option>
                 </select>
             </div>
               <div class="item">
                  <p>Fare</p>
                  <input type="number" name="fare_per_km" placeholder="Enter Fare Per Km" min="20" step="0.5"></input>
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
          <button type="submit" href="/" id="edit">EDIT</button> 
          <button type="submit" href="/" id="cancel">CANCEL</button>
        </div>
            </form>
        </div>
     </body>
  
  );

}