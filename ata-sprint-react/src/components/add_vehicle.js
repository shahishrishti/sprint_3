import React from 'react';
import '../css/add_vehicle.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import addVehicleAction from '../actions/add_vehicle_action'
import GetRouteAction from '../actions/view_all_route_action';


let dispatch;
let history;
let selectedRouteId;
export const AddVehicleComponent = (props) =>{


   dispatch = useDispatch();
   history = useHistory();
   let routeList = useSelector(state => state.routeReducer.route);

   React.useEffect(() =>{
       RouteList()
   } , []);

   const RouteList = () =>{
       console.log("hello");
       dispatch(GetRouteAction());
   }

   console.log("Route : ",routeList);
   if(!Array.isArray(routeList)) {
       routeList = [];
       console.log("Set routeList to blank array");
   }
    return (
     <body>
        <div class="testbox">
            <form action="/">
              <div class="banner">
                 <h1>Add Vehicle</h1>
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


}