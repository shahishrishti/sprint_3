import React from 'react';
import '../css/add_driver.css'
export const AddDriverComponent = (props) =>{
    return (
        <body>
        <div class="testbox">
        <form action="/">
          <div class="banner">
            <h1>Add Driver</h1>
          </div>
          <div class="item">
            <p>Driver name</p>
              <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div class="item">
            <p>Driver address</p>
            <div class="address-item">
              <input type="text" name="address" placeholder="Enter your address" />
            </div>
          </div>
          <div class="item">
            <p>Phone</p>
            <input type="text" name="phone" placeholder="### ### ####"/>
          </div>
          <div class="item">
            <p>License Number</p>
            <div class="address-item">
              <input type="text" name="number" placeholder="Enter license number" />
            </div>
          </div>
          
          
            <div class="btn-block">
              <button type="submit" href="/">Add </button>
            </div>
        </form>
        </div>
      </body>
   
    
    
    
  );

}