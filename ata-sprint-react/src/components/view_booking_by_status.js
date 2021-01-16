import React from 'react';
import '../css/add_booking.css'
import { useSelector, useDispatch } from 'react-redux'
import ViewBookingByStatusAction from '../actions/view_booking_by_status_action'

let dispatch;
export const ViewBookingByStatusComponent = (props) =>{

    let bookingList = useSelector(state => state.bookingReducer.booking);
    dispatch = useDispatch();

    React.useEffect(() => {
        BookingList();
    }, []);

    const BookingList = () => {
        console.log("Use Effect");
        dispatch(ViewBookingByStatusAction());
    }
    
    console.log("BookingList: ", bookingList);
    
    if(!Array.isArray(bookingList)){
        bookingList = [];
        console.log("Set bookingList to blank array");
    }
        
    return (
        <div class="testbox">
            <form onSubmit={handleSubmit}>
                <div class="banner">
                    <h1>View Booking By Status</h1>
                </div>
                <div class="item">
                    <p>Please enter the type of status for which you want to view bookings (Confirm/Pending)</p>
                    <input type="text" name="bookingStatus" id="bookingStatus" placeholder="Enter status (Either Confirm/Pending)" />
                </div>

                <div class="btn-block">
                    <button type="submit" >View</button>
                </div>
                
                <table class="content-table">
                    <thead>
                        <tr>
                        <th scope="col">Journey Date</th>
                        <th scope="col">Booking Date</th>
                        
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Fare</th>
                        <th scope="col">Source</th>
                        <th scope="col">Destination</th>
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
    return bookingList.map((booking,index) => {
        //const routeid = booking.route.routeid;
        const source = booking.route.source;
        const destination = booking.route.destination;
        const { bookingId, journeyDate, bookingDate, vehicleType, fare, bookingStatus } = booking;
        return (
            <tr key={bookingId}>
                <td>{journeyDate}</td>
                <td>{bookingDate}</td>
                
                <td>{vehicleType}</td>
                <td>{fare}</td>
                <td>{source}</td>
                <td>{destination}</td>
                <td>{bookingStatus}</td>
            </tr>
        )
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target)
    const bookingStatus = data.get('bookingStatus');
    console.log(bookingStatus);
    if(bookingStatus===''){
        alert("Status cannot be blank");
        return;
    }else if(bookingStatus==="Confirm" || bookingStatus==="Pending"){
        dispatch(ViewBookingByStatusAction(bookingStatus));
    }else{
        alert("Status should be either Confirm / Pending");
    }

}

export default ViewBookingByStatusComponent;