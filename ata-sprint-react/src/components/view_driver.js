import React from 'react';
import '../css/view_driver.css'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import GetDriverAction from '../actions/view_all_driver';
import GetVehicleNoAction from '../actions/view_all_vehicleno_action';
import GetDriverByNameAction from '../actions/view_driver_by_drivername';
import GetDriverByLicensenoAction from '../actions/view_driver_by_licenseno';
import GetAllDriverName from '../actions/view_all_drivername';
import  GetAllDriverLicenseno from '../actions/view_all_licenseno'
 
let dispatch;
let count = 0;
let selectedOption;
let selectedValue;

export const ViewDriverComponent = (props) => {
    let [filter, setFilter] = useState();
    let [driver, setDriver ] = useState();
    dispatch = useDispatch();
    let driverList = useSelector(state => state.driverReducer.driver);
    let filterList = useSelector(state => state.driverReducer.filter);


    React.useEffect(() => {
        DriverList()
    }, []);

    const DriverList = () => {
        console.log("Use effect");
        dispatch(GetDriverAction());
    }

    console.log("DriverList: ", driverList);
    if(!Array.isArray(driverList)) {
        driverList = [];
        filterList = [];
        console.log("Set driverList  and filterList to blank array");
    }

    const searchHandleChange = (event) => {
        selectedOption = event.target.value;
        console.log("Selected option: " + selectedOption);
        if(selectedOption === "Select Option") {
            alert("Please select and option...");
            return; 
        } else if(selectedOption === "Driver Name") {
            dispatch(GetAllDriverName())
            .then((response) => {
                console.log("REsponse: ", response);
                console.log("filterList: ", filterList);
                setFilter(filterList);
            });
        } else if(selectedOption === "Licenseno") {
            dispatch(GetAllDriverLicenseno())
            .then((response) => {
                console.log("REsponse: ", response);
                console.log("filterList: ", filterList);
                setFilter(filterList);
            });
        } 
    }
    
    
const handleSubmit = (event) => {
    event.preventDefault();
    if(selectedOption === "Driver Name") {
        console.log("Driver name from line 68: ", selectedValue);
        dispatch(GetDriverByNameAction(selectedValue))
        .then((response) => {
            console.log("Driver name REsponse: ", response);
            console.log("routeList: ", driverList);
            setDriver(driverList);
        });
    } else if(selectedOption === "Licenseno") {
        console.log("license no from line 76",selectedValue);
        dispatch(GetDriverByLicensenoAction(selectedValue))
        .then((response) => {
            console.log("License No Response: ", response);
            console.log("routeList: ", driverList);
            setDriver(driverList);
        });
    } 
    }

    return (
        <div class="testbox">
            <form onSubmit={handleSubmit}>
                <div class="banner">
                    <h1>View Driver</h1>
                </div>
                <div class="item">
                    <p>Search By</p>
                    <select  id ="search" onChange={searchHandleChange}  required>
                        <option>Select Option</option>
                        <option>Driver Name</option>
                        <option>Licenseno</option>
                    </select>
                </div>
                <div class="item">
                    <p>Filter</p>
                    <select  id =" filter"   onChange={filterHandleChange} required>
                   {renderFilterList(filterList)}
                    </select>
                    </div>

                    <div class="btn-block">
                    <button>View</button>
                </div>
                <div class="item">
               <table class="content-table">
                    <thead>
                        <tr>
                        <th scope="col">SrNo.</th> 
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Contact No</th>
                        <th scope="col">License No</th>

                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {renderTableData(driverList)} 
                    </tbody>
                </table>
                </div>
            </form>
        </div>
    );
}




function renderTableData(driverList) {
    console.log("DriverList: ", driverList);
    return driverList.map((driver ) => {
      const {driverId,driverName,address,contact,licenseNo} = driver //destructuring
       return (
        <tr key={driverId}>
            <td>{driverId}</td>
             <td>{driverName}</td>
             <td>{address}</td>
             <td>{contact}</td>
             <td>{licenseNo}</td>
             <td><button type="submit" id="action" href="/">Edit</button><button type="submit" id="action" href="/">Delete</button></td>
             </tr>
          
       )
    })
 };

 function filterHandleChange(event) {
    selectedValue = event.target.value
    console.log("Selected Option: " + selectedValue);
}

function renderFilterList(filterList) {
    console.log("filterList", filterList);
    return filterList.map((driver) => {
        return (
            <option value = {driver}>{driver}</option>
        )
    })
} 




