//import statements

import React from 'react';
import '../css/add_route.css'
import { useSelector, useDispatch } from 'react-redux';
import GetPlaceNameAction from '../actions/place_action';
import AddRouteAction from '../actions/add_route_action';
import Route from '../models/route';
import { NavBarComponent } from './navbar';

//global variable declaration

let dispatch;
let selectedSource, selectedDestination;

//functional component

export const AddRouteComponent = (props) => {
  
    dispatch = useDispatch();
    let placeList = useSelector(state => state.placeReducer.place);

   
    React.useEffect(() => {
        PlaceList()
    }, []);

    const PlaceList = () => {
        console.log("HEllo");
        dispatch(GetPlaceNameAction());
    }

    console.log("Places: ", placeList);
    if(!Array.isArray(placeList)) {
        placeList = [];
        console.log("Set placeList to blank array");
    }

    return (
        <div>
            <NavBarComponent/>
            <div className="testbox">
                <form onSubmit={handleSubmit}>
                    <div className="banner">
                        <h1>Add Route</h1>
                    </div>
                    <div className="item">
                        <p>Source</p>
                        <select id="source" onChange={sourceHandleChange} required>
                            {renderPlace(placeList)}    
                        </select>
                    </div>
                    <div className="item">
                        <p>Destination</p>
                        <select id="destination" onChange={destinationHandleChange} required>
                            {renderPlace(placeList)}
                        </select>
                    </div>
                    <div className="item">
                        <p>Distance</p>
                        <input type="number" name="distance" placeholder="Enter distance" min="20" step="0.5"/>
                    </div>
                    <div className="btn-block">
                        <button>ADD ROUTE</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

//Select source from dropdown

function sourceHandleChange(event) {
    selectedSource = event.target.value;
    console.log("Selected source: " + selectedSource);
}

//Select destination from dropdown

function destinationHandleChange(event) {
    selectedDestination = event.target.value;
    console.log("Selected destination: " + selectedDestination);
}

//Render Places in the dropdown

function renderPlace(placeList) {
    console.log("placeList", placeList);
    return placeList.map((place) => {
        const { placeId, placeName } = place
        return (
            <option key={placeId} value = {placeName}>{placeName}</option>
        )
    })
} 

//handle submit button to add route and validation

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const distance = data.get('distance');
    console.log(distance);
    if(distance===''){
        alert("Distance cannot be blank");
        return;
    } else if(selectedSource === selectedDestination) {
        alert("Source and destination cannot be same");
        return;
    }
    const routeObj = new Route(selectedSource, selectedDestination, distance);
    dispatch(AddRouteAction(routeObj));    
    alert("Route added successfully!!");
}