import React from 'react';
import '../css/add_booking.css'
import { useSelector, useDispatch } from 'react-redux'
import ViewBookingByNameAction from '../actions/view_booking_by_name_action';
import {useRef} from 'react'

let dispatch;
export const ViewBookingByNameComponent = (props) =>{

    let bookingList = useSelector(state => state.bookingReducer);
    dispatch = useDispatch();

    /*React.useEffect(() => {
        BookingList();
    }, []);

    const BookingList = () => {
        dispatch(ViewBookingByNameAction());
    }
    */
    console.log("BookingList: ", bookingList);
    
    if(!Array.isArray(bookingList)){
        bookingList = [];
        console.log("Set bookingList to blank array");
    }
    
    const userNameRef = useRef(null);
    const viewBooking = (event) => { 
           // props.viewBooking(new Booking(userNameRef.current.value));
        }
        
    return (
        <div class="testbox">
            <form onSubmit={handleSubmit}>
                <div class="banner">
                    <h1>View Booking By Username</h1>
                </div>
                <div class="item">
                    <p>Passenger User name</p>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                </div>

                <div class="btn-block">
                    <button type="submit" >View</button>
                </div>
                
                <table class="content-table">
                    <thead>
                        <tr>
                        <th scope="col">Journey Date</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Route</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData(bookingList)}
                    </tbody>
                </table>
            </form>
        </div>

    );
}

function renderTableData(bookingList) {
    console.log("bookingList: ", bookingList);
    return bookingList.map((booking) => {
        const routeid = booking.route.routeid;
        const { bookingid, journeydate, bookingdate, vehicletype, bookingstatus } = booking;
        return (
            <tr key={bookingid}>
                <td>{journeydate}</td>
                <td>{bookingdate}</td>
                <td>{routeid}</td>
                <td>{vehicletype}</td>
                <td>{bookingstatus}</td>
            </tr>
        )
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const name = data.get('name');
    console.log(name);
    if(name===''){
        alert("Name cannot be blank");
        return;
    }
    dispatch(ViewBookingByNameAction(name));
}