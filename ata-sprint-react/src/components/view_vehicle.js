import React from 'react';
import '../css/view_vehicle.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GetVehicleAction from '../actions/view_all_vehicle_action';
import GetAllVehicleName from '../actions/view_all_vehicleName';
import GetAllVehicleNo from '../actions/view_all_vehicleNo';
import GetVehicleByVehicleName from '../actions/view_by_vehicleName';
import GetVehicleByVehicleNo from '../actions/view_by_vehicleNo';


let dispatch;
let selectedOption;
let selectedValue;

export const ViewVehicleComponent = (props) => {

    let [filter, setFilter] = useState();
    let [vehicle, setVehicle ] = useState();
    dispatch = useDispatch();
    let vehicleList = useSelector(state => state.vehicleReducer.vehicle);
    let filterList = useSelector(state => state.vehicleReducer.filter);

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
        filterList =[];
        console.log("Set vehicleList and filterList to blank array");
    }

    const searchHandleChange = (event) => {
        selectedOption = event.target.value;
        console.log("Selected option: " + selectedOption);
        if(selectedOption === "Select Option") {
            alert("Please select and option...");
            return;
        }
        else if(selectedOption === "Vehicle Name") {
            dispatch(GetAllVehicleName())
            .then((response) => {
                console.log("REsponse: ", response);
                console.log("filterList: ", filterList);
                setFilter(filterList);
            });
        }
        else if(selectedOption === "Vehicle No") {
            dispatch(GetAllVehicleNo())
            .then((response) => {
                console.log("REsponse: ", response);
                console.log("filterList: ", filterList);
                setFilter(filterList);
            });
        }
    }

 const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handle Submit called from line 67");
        if(selectedOption === "Vehicle Name") {
            dispatch(GetVehicleByVehicleName(selectedValue))
            .then((response) => {
                console.log("Response: ", response);
                console.log("vehicleList: ", vehicleList);
                setVehicle(vehicleList);
            });
        }
        if(selectedOption === "Vehicle No") {
            console.log("VehicleNo from line 77: ", selectedValue);
            dispatch(GetVehicleByVehicleNo(selectedValue))
            .then((response) => {
                console.log("Vehicle no. Response: ", response);
                console.log("Vehicle No. vehicleList: ", vehicleList);
                setVehicle(vehicleList);
            });
        }
       
    }


    return(
        <body>
             <div class="testbox" >
                <form onSubmit={handleSubmit}>
                   <div class="banner">
                      <h1>View Vehicle</h1>
                   </div>
                   <div class="item">
                     <p>View vehicle with</p>
                       <select id="search" onChange={searchHandleChange}  required>
                          <option>Select option</option>
                          <option>Vehicle No</option>
                          <option>Vehicle Name</option>
                         
                       </select>
                   </div>
                   <div class="item">
                    <p>Filter</p>
                    <select id="filter" onChange={filterHandleChange} required>
                    {renderFilterList(filterList)}     
                    </select>
                </div>
                   <div class="btn-block">
                      <button>View</button>
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
    return vehicleList.map((vehicle,index) => {
     const typeName = vehicle.vehicleType.typeName;
     const route = vehicle.route.source + "-" + vehicle.route.destination;
     const seatingCapacity = vehicle.vehicleType.seatingCapacity;
       const { vehicleNo, vehicleName,fare} = vehicle //destructuring
       return (
          <tr key={vehicleNo}>
             <td>{vehicleNo}</td>
             <td>{vehicleName}</td>
             <td>{typeName}</td>
             <td>{seatingCapacity}</td>
             <td>{fare}</td>
             <td>{route}</td>
             <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
          </tr>
       )
    })
 };

 function filterHandleChange(event) {
    selectedValue = event.target.value
    console.log("Selected Vehicle: " + selectedValue);
}


 function renderFilterList(filterList) {
    console.log("filterList", filterList);
    return filterList.map((vehicle) => {
        return (
            <option value = {vehicle}>{vehicle}</option>
        )
    })
} 
