//import statements

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import '../css/view_route.css'
import GetRouteAction from '../actions/view_all_route_action';
import GetAllSourceAction from '../actions/view_all_source';
import GetAllDestinationAction from '../actions/view_all_destination';
import GetAllSourceDestinationAction from '../actions/view_all_source_destination';
import GetRouteBySourceAction from '../actions/view_by_source';
import GetRouteByDestinationAction from '../actions/view_by_destination';
import GetRouteBySourceDestinationAction from '../actions/view_by_source_destination';
import DeleteRouteAction from '../actions/delete_route_action';
import { NavBarComponent } from './navbar';

//global variable declarations

let dispatch;
let selectedOption;
let selectedPlace;

//Functional Component

export const ViewRouteComponent = (props) => {
    
    let [filter, setFilter] = useState();
    let [route, setRoute ] = useState();
    dispatch = useDispatch();
    let routeList = useSelector(state => state.routeReducer.routes);
    let filterList = useSelector(state => state.routeReducer.filter);

    React.useEffect(() => {
        RouteList()
    }, []);

    const RouteList = () => {
        console.log("Use effect");
        dispatch(GetRouteAction());
    }

    console.log("RouteList: ", routeList);
    if(!Array.isArray(routeList)) {
        routeList = [];
        filterList =[];
        console.log("Set routeList and filterList to blank array");
    }

    //Select options to apply filter

    const searchHandleChange = (event) => {
        selectedOption = event.target.value;
        console.log("Selected option: " + selectedOption);
        if(selectedOption === "Select Option") {
            alert("Please select and option...");
            return;
        } else if(selectedOption === "Source") {
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

    //Handle View Button to get filtered data

    const handleSubmit = (event) => {
        event.preventDefault();
        if(selectedOption === "Source") {
            dispatch(GetRouteBySourceAction(selectedPlace))
            .then((response) => {
                console.log("REsponse: ", response);
                console.log("routeList: ", routeList);
                setRoute(routeList);
            });
        } else if(selectedOption === "Destination") {
            dispatch(GetRouteByDestinationAction(selectedPlace))
            .then((response) => {
                console.log("REsponse: ", response);
                console.log("routeList: ", routeList);
                setRoute(routeList);
            });
        } else if(selectedOption === "Source and Destination") {
            let route = selectedPlace.split("-");
            dispatch(GetRouteBySourceDestinationAction(route[0], route[1]))
            .then((response) => {
                console.log("REsponse: ", response);
                console.log("routeList: ", routeList);
                setRoute(routeList);
            });
        }
    }

    //Render Table to display route data

    const renderTableData = (routeList) => {
        console.log("routeList: ", routeList);
        return routeList.map((route,index) => {
            const { routeid, source, destination, distance } = route; 
            return (
                <tr key={routeid,index}>
                    <td>{source}</td>
                    <td>{destination}</td>
                    <td>{distance}</td>
                    <td><button  type="submit" id="action" onClick={(e) => deleteRoute(e,routeid,index)}>Delete</button></td>
                </tr>
            )
        });
    }

    //Delete Route

    const deleteRoute=(event,routeid, index)=>{
        event.preventDefault();
        console.log("routeid",routeid);
        dispatch(DeleteRouteAction(routeid))
        .then((response)=>{
            routeList.splice(index, 1);
            
            setRoute(routeList);
        });
    }

    return (
        <div>
            <NavBarComponent/>
            <div class="testbox">
                <form  onSubmit={handleSubmit}>
                    <div class="banner">
                        <h1>View Route</h1>
                    </div>
                    <div class="item">
                        <p>Search By</p>
                        <select id="search" onChange={searchHandleChange} required>
                            <option>Select Option</option>
                            <option>Source</option>
                            <option>Destination</option>
                            <option>Source and Destination</option>
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
                    <div class="item">
                        <table class="content-table">
                            <thead>
                                <tr>
                                    <th scope="col">Source</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Distance</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableData(routeList)}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    );
}

//Select options to apply filter

function filterHandleChange(event) {
    selectedPlace = event.target.value
    console.log("Selected Place: " + selectedPlace);
}

//Select filter option

function renderFilterList(filterList) {
    console.log("filterList", filterList);
    return filterList.map((place) => {
        return (
            <option value = {place}>{place}</option>
        )
    })
}