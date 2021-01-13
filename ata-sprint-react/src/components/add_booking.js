import React from 'react';
import {addBooking} from '../css/add_booking.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import addBookingAction from '../actions/add_booking_action'
import GetRouteAction from '../actions/view_all_route_action';
let dispatch;
let history;
let selectedRouteId;

export const AddBookingComponent = (props) =>{

    dispatch = useDispatch();
    history = useHistory();
    let routeList = useSelector(state => state);

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
    


    return(
        <div class="testbox">
            <form>
                <div class="banner">
                    <h1>Add Booking</h1>
                </div>
                <div class="item">
                    <p>Passenger contact name</p>
                        <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div class="item">
                    <p>Booking Date</p>
                    <input type="date" id="bookingdate" name="bookingdate"/>
                </div>
                <div class="item">
                    <p>Journey Date</p>
                    <input type="date" id="journeydate" name="journeydate"/>
                </div>
                <div class="item">
                    <p>Route</p>
                    <select id="route" onChange={handleChangeRoute} required>
                        {renderRoute(routeList)}
                    </select>
                </div>
                <div class="item">
                    <p>Vehicle Type</p>
                    <select required>
                    <option value="1">Car</option>
                    <option value="2">Bus</option>
                    </select>
                </div>
                    <div class="btn-block">
                    <button type="submit" href="/">Book</button>
                    </div>
        </form>
    </div>
    );

    function handleChangeRoute(event){
        selectedRouteId =event.target.value;
        console.log("selected Route : ",selectedRouteId);
    }

    function renderRoute(routeList){
        console.log("routeList: ",routeList);
        return routeList.map((route,index) =>{
            const {routeId,source,destination,distance}=route
            return(
                <option key={routeId} value={routeId}>{source}-{destination}</option>
            )
        })
    };
    
}