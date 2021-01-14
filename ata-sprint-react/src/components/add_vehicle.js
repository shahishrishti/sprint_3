import React from 'react';
import '../css/add_vehicle.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import addVehicleAction from '../actions/add_vehicle_action'
import GetRouteAction from '../actions/view_all_route_action';
import GetVehicleTypeAction from '../actions/vehicleType_action';
import Vehicle from '../models/vehicle';


let dispatch;
let history;
let selectedRouteId;
let selectedtypeId;
export const AddVehicleComponent = (props) =>{


   dispatch = useDispatch();
   history = useHistory();
   let routeList = useSelector(state => state.routeReducer.route);
   let vehicletypeList = useSelector(state => state.vehicletypeReducer.vehicletype);

   React.useEffect(() =>{
       RouteList()
   } , []);

   const RouteList = () =>{
       console.log("hello");
       dispatch(GetRouteAction());
   }

   React.useEffect(() =>{
      VehicleTypeList()
  } , []);

   const VehicleTypeList = () =>{
      console.log("hello");
      dispatch(GetVehicleTypeAction());
  }

   console.log("Route : ",routeList);
   if(!Array.isArray(routeList)) {
       routeList = [];
       console.log("Set routeList to blank array");
   }

   console.log("Vehicle : ",vehicletypeList);
   if(!Array.isArray(vehicletypeList)) {
       vehicletypeList = [];
       console.log("Set vehicletypeList to blank array");
   }
    return (
     <body>
        <div class="testbox">
            <form onSubmit={handleSubmit}>
              <div class="banner">
                 <h1>Add Vehicle</h1>
              </div>
              <div class="item">
                  <p>Vehicle No.</p>
                  <input type="text" name="vehicleNo" placeholder="Enter vehicle No." />
               </div>
              <div class="item">
                 <p>Vehicle name</p>
                  <input type="text" name="vehicleName" placeholder="Enter vehicle name" />
              </div>
              <div class="item">
               <p>Vehicle Type</p>
               <select id="vehicletype" onChange={handleChangeVehicleType} required>
                        {renderVehicleType(vehicletypeList)}
                    </select>
             </div>
               <div class="item">
                  <p>Fare</p>
                  <input type="number" name="fare" placeholder="Enter Fare Per Km" min="20" step="0.5"></input>
               </div>
             <div class="item">
               <p>Route</p>
               
                    <select id="route" onChange={handleChangeRoute} required>
                        {renderRoute(routeList)}
                    </select>
             </div>
     
        <div class="btn-block">
          <button type="submit" href="/">ADD</button>
        </div>
            </form>
        </div>
     </body>
  
  );

  function handleChangeRoute(event){
   selectedRouteId =event.target.value;
   console.log("selected Route : ",selectedRouteId);
}

function renderRoute(routeList){
   console.log("routeList: ",routeList);
   return routeList.map((route,index) =>{
       const {routeId,source,destination}=route
       return(
           <option key={routeId} value={routeId}>{source}-{destination}</option>
       )
   })
};


function handleChangeVehicleType(event){
   selectedtypeId =event.target.value;
   console.log("selected VehicleType : ",selectedtypeId);
}

function renderVehicleType(vehicletypeList){
   console.log("vehicletypeList: ",vehicletypeList);
   return vehicletypeList.map((vehicletype,index) =>{
       const {typeId,typeName}=vehicletype
       return(
           <option key={typeId} value={typeId}>{typeName}</option>
       )
   })
};




}
function handleSubmit(event) {
   event.preventDefault();
   const data = new FormData(event.target)
   const vehicleNo = data.get('vehicleNo');
   const vehicleName = data.get('vehicleName');
   const fare = data.get('fare');
   console.log(vehicleNo);
   console.log(vehicleName);
   console.log(fare);
   if(vehicleNo===''){
       alert("Vehicle no. cannot be blank");
       return;
   } else if(vehicleName==='') {
       alert("Vehicle name cannot be blank");
       return;
   }
   const vehicleObj = new Vehicle(vehicleNo, vehicleName, selectedtypeId, fare, selectedRouteId );
   dispatch(addVehicleAction(vehicleObj));
}