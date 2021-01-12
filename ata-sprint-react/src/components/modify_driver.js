import React from 'react';
import '../css/modify_driver.css'

export const ModifyDriverComponent = (props) => {
     return(
         <body>
              <div class="textbox">
                  <form action="/">
                      <div class="banner">
                          <h1>Automated Travel Agency</h1>
                      </div>
                      <div class="item">
                        <p>Driver Name</p>
                          <div class="name-item">
                              <input type="text" name="name" placeholder="Enter Driver Name" />
                          </div>
                      </div>
                      <div class="item">
                          <p>Address</p>
                          <div class="name-item">
                              <input type="text" name="address" placeholder="Enter Address" />
                          </div>
                      </div>
                      <div class="item">
                          <p>License No.</p>
                          <div class="name-item">
                              <input type="text" name="license_no" placeholder="Enter License No" />
                          </div>
                      </div>
                      <div class="item">
                          <p>Contact No.</p>
                          <div class="name-item">
                          <input type="number" name="contact_no" placeholder="Enter Contact No" />
                      </div>
                      </div>
                      <div class="btn-block">
                          <button type="submit" href="/">UPDATE</button>
                      </div>
                  </form>
                  </div>
            </body>
           ); 
    }  
