import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import addBookingAction from '../actions/add_booking_action'
import GetRouteAction from '../actions/view_all_route_action';
import GetUserAction from '../actions/user_action';
import Booking from '../models/booking';
import {UserNavBarComponent} from'./user_navbar';
let dispatch;
let history;
let selectedRouteId;
let selectedUserId;



export const AddBookingComponent = (props) =>{

    dispatch = useDispatch();
    history = useHistory();
    let routeList = useSelector(state => state.routeReducer.route);
    let userList = useSelector(state =>state.userReducer.user);
    

    React.useEffect(() =>{
        RouteList()
    } , []);

    const RouteList = () =>{
        console.log("hello");
        dispatch(GetRouteAction());
    }

    React.useEffect(()=>{
        UserList()
    } , []);

    const UserList = () =>{
        console.log("hello user");
        dispatch(GetUserAction());
    }

    console.log("Route : ",routeList);
    if(!Array.isArray(routeList)) {
        routeList = [];
        console.log("Set routeList to blank array");
    }
    
    console.log("User : ",userList);
    if(!Array.isArray(userList)) {
        userList = [];
        console.log("Set userList to blank array");
    }


    return(
        <div>
            <UserNavBarComponent/>
        <div class="testbox">
            <form onSubmit={handleSubmit}>
                <div class="banner">
                    <h1>Add Booking</h1>
                </div>
                <div class="item">
                    <p>User Name</p>
                    <select id="user" onChange={handleChangeUser} required>
                        {renderUser(userList)}
                    </select>
                </div>
                <div class="item">
                    <p>Journey Date</p>
                    <input type="date" id="journeyDate"  name="journeyDate"/>
                </div>
                <div class="item">
                    <p>Route</p>
                    <select id="route" onChange={handleChangeRoute} required>
                        {renderRoute(routeList)}
                    </select>
                </div>
                <div class="item">
                    <p>Vehicle Type</p>
                    <input type="text" id="vehicleType" name="vehicleType"></input>
                </div>
                    <div class="btn-block">
                    <button>Book</button>
                    </div>
        </form>
    </div>
    </div>
    );

    function handleChangeRoute(event){
        selectedRouteId =event.target.value;
        console.log("selected Route : ",selectedRouteId);
    }

    function renderRoute(routeList){
        console.log("routeList: ",routeList);
        return routeList.map((route) =>{
            const {routeid,source,destination}=route
            return(
                <option key={routeid} value={routeid}>{source}-{destination}</option>
            )
        })
    };

    function handleChangeUser(event){
        selectedUserId = event.target.value;
        console.log("selected user : ",selectedUserId);
    }
    
    function renderUser(userList){
        console.log("userList: ",userList);
        return userList.map((user)=>{
            console.log("User from line 113: ", user);
            const {userId,name} =user
            return(
                <option key={userId} value={userId}>{name}</option>
            )
        })
    };
    
}
    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target)
        const journeyDate = data.get('journeyDate');
        //const bookingDate = data.get('bookingDate');
        const vehicleType = data.get('vehicleType');
        //const fare = data.get('fare');
         if(journeyDate===''){
            alert("journey date cannot be blank");
        }
        const bookingDate='2020-01-18';
        const bookingStatus='confirmed';
        const fare=4500;
        console.log("Route ",selectedRouteId)
        console.log("user: ",selectedUserId)
        
    const bookingObj = new Booking(journeyDate,bookingDate,vehicleType,selectedRouteId,selectedUserId,fare,bookingStatus);
    dispatch(addBookingAction(bookingObj));
    console.log("booking done successfully");
    alert("booking done successfully");
}