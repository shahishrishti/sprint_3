import React from 'react';
import '../css/view_vehicle.css'
import { useSelector, useDispatch } from 'react-redux';
import GetVehicleAction from '../actions/view_all_vehicle_action';

let dispatch;
let count = 0;
export const ViewVehicleComponent = (props) => {

    dispatch = useDispatch();
    let vehicleList = useSelector(state => state.vehicleReducer.vehicle);

    React.useEffect(() => {
        VehicleList()
    }, []);

    const VehicleList = () => {
        console.log("Use effect");
        dispatch(GetVehicleAction());
    }

    console.log("VehicleList: ", vehicleList);
    if(!Array.isArray(vehicleList)) {
        vehicleList = [];
        console.log("Set vehicleList to blank array");
    }


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
                          <option value="1">Select option</option>
                          <option value="2">Vehicle No.</option>
                          <option value="3">Vehicle Name</option>
                          <option value="4">Fare</option>
                       </select>
                   </div>
                   <div class="btn-block">
                      <button type="submit" href="/">View</button>
                   </div>
                   <table class="content-table">
                    <thead>
                        <tr>
                        
                        <th scope="col">Vehicle No.</th>
                        <th scope="col">Vehicle Name</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Seating Capacity</th>
                        <th scope="col">Fare</th>
                        <th scope="col">Route</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {renderTableData(vehicleList)}
                    </tbody>
                </table>
                  
                    
                </form>
             </div>
        </body>
    );
    
};

function renderTableData(vehicleList) {
    console.log("vehicleList: ", vehicleList);
    return vehicleList.map((vehicle, index) => {
     // const typeName = vehicle.vehicleType.typeName;
     // const routeId = vehicle.route.routeId;
       const { vehicleNo, vehicleName, typeName, seatingCapacity, fare ,route} = vehicle //destructuring
       return (
          <tr key={vehicleNo}>
             <td>{vehicleNo}</td>
             <td>{vehicleName}</td>
             <td>{typeName}</td>
             <td>{seatingCapacity}</td>
             <td>{fare}</td>
             <td>{route}</td>
            
             
          </tr>
       )
    })
 };