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
import axios from 'axios';

let dispatch;
let count = 0;
let selectedOption;
let selectedPlace;

export const ViewRouteComponent = (props) => {
    
    let [filter, setFilter] = useState();
    let [route, setRoute ] = useState();
    dispatch = useDispatch();
    let routeList = useSelector(state => state.routeReducer.route);

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


    const renderTableData = (routeList) => {
        console.log("routeList: ", routeList);
        return routeList.map((route) => {
            const { routeid, source, destination, distance } = route;
            return (
                <tr key={routeid}>
                    <td>{source}</td>
                    <td>{destination}</td>
                    <td>{distance}</td>
                    <td><button type="submit" id="action" href="/" onClick={props.renderUpdateRouteComponent.bind(this, route, props)}>Edit</button>
                    <button  type="submit" id="action" href="/" >Delete</button></td>
                </tr>
            )
        });
    }

    return (
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
    );
}



function filterHandleChange(event) {
    selectedPlace = event.target.value
    console.log("Selected Place: " + selectedPlace);
}

function renderFilterList(filterList) {
    console.log("filterList", filterList);
    return filterList.map((place) => {
        return (
            <option value = {place}>{place}</option>
        )
    })
} 

function renderUpdateRouteComponent(route) {
    this.setRoute({ selected_route: route, renderForm: 'EDIT_ROUTE'});
}





