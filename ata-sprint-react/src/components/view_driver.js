import React from 'react';
import '../css/view_vehicle.css'
import { useSelector, useDispatch } from 'react-redux';
import {useState} from 'react';
import GetDriverAction from '../actions/view_all_driver';
import GetVehicleNoAction from '../actions/view_all_vehicleno_action'  
    

let dispatch;
let count = 0;
let selectedOption;

export const ViewDriverComponent = (props) => {
    //let [filter, setFilter] = useState();
    //let [driver, setDriver] = useState();
    dispatch = useDispatch();
    let driverList = useSelector(state => state.driverReducer.driver);
   // let filterList = useSelector(state => state.driverReducer.filter);


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
       // filterList = [];
        console.log("Set driverList  and filterList to blank array");
    }

    return (
        <div class="testbox">
            <form action="/">
                <div class="banner">
                    <h1>View Driver</h1>
                </div>
                <div class="item">
                    <p>Search By</p>
                    <select  id ="search" required>
                        <option value="0">Select Option</option>
                        <option value="1">Driver Name</option>
                        <option value="2">Licenseno</option>
                    </select>
                </div>
                <div class="item">
                    <p>Filter</p>
                    <select  id =" filter" required>
                   }
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
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                  {/*  {renderTableData(driverList)} */}
                    </tbody>
                </table>
                </div>
            </form>
        </div>
    );
}


{/*const searchHandleChange = (event) => {
    selectedOption = event.target.value;
    console.log("Selected option: " + selectedOption);
    if(selectedOption === "Select Option") {
        alert("Please select and option...");
        return;
    } else if(selectedOption === "name") {
        dispatch(GetAllSourceAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    } else if(selectedOption === "Destination") {
        dispatch(GetAllDestinationAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    } else if(selectedOption === "Source and Destination") {
        dispatch(GetAllSourceDestinationAction())
        .then((response) => {
            console.log("REsponse: ", response);
            console.log("filterList: ", filterList);
            setFilter(filterList);
        });
    }
}


function renderTableData(driverList) {
    console.log("DriverList: ", driverList);
    return driverList.map((driver, index) => {
       const { name, licenseno } = driver //destructuring
       return (
        <tr key={name}>

             <td>{name}</td>
             <td>{licenseno}</td>
            
             </tr>
          
       )
    })
 };*/}