import React from 'react';
import '../css/update_route.css'
export const UpdateRouteComponent = (props) =>{
    return (
<body>
    <div class="testbox">
    <form action="/">
      <div class="banner">
        <h1>Update Route</h1>
      </div>
              
      <div class="item">
        <p>Source</p>
        <select required>
          <option value="0" hidden>Select Source</option>
          <option value="1">Mumbai</option>
          <option value="2">Pune</option>
          <option value="3">Nashik</option>
          <option value="4">Nagpur</option>
          <option value="5">Surat</option>
          
       </select>
      </div>
      <div class="item">
        <p>Destination</p>
        <select required>
          <option value="0" hidden>Select Destination</option>
          <option value="1">Pune</option>
          <option value="2">Mumbai</option>
          <option value="3">Nagpur</option>
          <option value="4">Nashik</option>
          <option value="5">Surat</option>
          
       </select>
      </div>
      <div class="item">
        <p>Distance</p>
        <input class="quantity"  min="1" value="1" type="number"/>
      </div>

      <div class="btn-block">
          <button type="submit" href="/">Update</button>
        </div>
    </form>
    </div>
  </body>
    );
}