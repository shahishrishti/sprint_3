import React from 'react';
import '../css/add_route.css'
import { useSelector, useDispatch } from 'react-redux';
import GetPlaceNameAction from "../actions/place_action";

let dispatch;
let selectedSource, selectedDestination;

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
        <div className="testbox">
            <form action="/">
                <div class="banner">
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
                    <button type="submit" href="/">Book</button>
                </div>
            </form>
        </div>
    );
}


function sourceHandleChange(event) {
    selectedSource = event.target.value;
    console.log("Selected department: " + selectedSource);
}

function destinationHandleChange(event) {
    selectedDestination = event.target.value;
    console.log("Selected department: " + selectedDestination);
}

function renderPlace(placeList) {
    console.log("placeList", placeList);
    return placeList.map((place) => {
        const { placeId, placeName } = place
        return (
            <option key={placeId} value = {placeName}>{placeName}</option>
        )
    })
} 