import React from 'react';
import '../css/add_vehicle.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import GetVehicleAction from '../actions/view_all_vehicle_action';
import Driver from '../models/driver';
import AddDriverAction from '../actions/add_driver_action';
import {NavBarComponent} from './navbar';


let dispatch;
let history;
let selectedVehicleNo;
export const AddDriverComponent = (props) =>{


   dispatch = useDispatch();
   history = useHistory();
   let vehicleList = useSelector(state => state.vehicleReducer.vehicle);

   React.useEffect(() =>{
       VehicleList()
   } , []);

   const VehicleList = () =>{
       console.log("hello");
       dispatch(GetVehicleAction());
   }
   console.log("Route : ",vehicleList);
   if(!Array.isArray(vehicleList)) {
       vehicleList = [];
       console.log("Set vehicleList to blank array");
   }

    return (
     <body>
       <NavBarComponent/>
        <div class="testbox">
        <form onSubmit={handleSubmit}>
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
            <input type="text" name="contact" placeholder="### ### ####"/>
          </div>
          <div class="item">
            <p>License Number</p>
            <div class="address-item">
              <input type="text" name="licenseno" placeholder="Enter license number" />
            </div>
          </div>
          <div class="item">
               <p>Vehicle No</p>
               <select id="vehicleno" onChange={handleChangeVehicleNo} required>
                        {renderVehicle(vehicleList)}
                    </select>
             </div>
          
            <div class="btn-block">
              <button>Add </button>
            </div>
        </form>
        </div>
     </body>
  
  );

  function handleChangeVehicleNo(event){
   selectedVehicleNo =event.target.value;
   console.log("selected Vehicle No : ",selectedVehicleNo);
}

function renderVehicle(vehicleList){
   console.log("vehicleList: ",vehicleList);
   return vehicleList.map((vehicle) =>{
       console.log("Vehicle from line 103: ", vehicle)
       const {vehicleNo}=vehicle
       return(
           <option key={vehicleNo} value={vehicleNo}>{vehicleNo}</option>
       )
   })
}

function handleSubmit(event) {
   event.preventDefault();
   const data = new FormData(event.target);
   const name=data.get('name');
  const address=data.get('address');
  const contact=data.get('contact');
  const licenseno=data.get('licenseno')
  if(name===''){
    alert("Name cannot be blank");
    return;
} else if(address==='') {
    alert("Address  cannot be blank");
    return;
}
else if(contact==='') {
  alert("Contact  cannot be blank");
  return;
}
else if(licenseno==='') {
alert("License number cannot be blank");
return;
}
console.log("VehicleNo ", selectedVehicleNo)
   const driverObj = new Driver(name, address, licenseno, contact,selectedVehicleNo );
   dispatch(AddDriverAction(driverObj));
}
}