import React from 'react';
import '../css/view_booking.css';
import { useSelector, useDispatch } from 'react-redux';
import { ViewBookingAction } from "../actions/view_booking_action";

let dispatch;
export const ViewBookingComponent = (props) => {
    dispatch = useDispatch();
    let bookingList = useSelector(state => state.bookingReducer.booking);
     

    React.useEffect(() => {
        BookingList()
      }, []);
    
      const BookingList = () => {
          console.log("Use Effect");
        dispatch(ViewBookingAction());
      }
    console.log("bookingList: ", bookingList);
    if(!Array.isArray(bookingList)) {
        bookingList = [];
        console.log("Set bookingList to blank array");
    }
     return(
         <body>
        <div class="testbox">
                <form action="/">
                    <div class="banner">
                        <h1>View Booking</h1>
                    </div>
        
            
            <div class="item">
            <table class="content-table">
                    <thead>
                        <tr>
                        <th scope="col">Booking ID</th>
                        <th scope="col">Journey Date</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Cancel Date</th>
                        <th scope="col">Booking Status</th>
                        <th scope="col">Vehicle Type</th>
                        <th scope="col">Fare</th>
                        <th scope="col">Source</th>
                        <th scope="col">Destination</th>
                        </tr>
                    </thead>
            
            <tbody>
            
                {renderTableData(bookingList)}
    
            </tbody>
                </table>
                </div>
                
            </form>
          </div>
     </body>
    ); 
};

function renderTableData(bookingList) {
    console.log("bookingList: is ", bookingList);
    return bookingList.map((booking, index) => {
      //  const userid = booking.user.userid;
       // const routeid=booking.route.routeid;
        const source=booking.route.source;
        const destination=booking.route.destination;
       const { bookingId,journeyDate,bookingDate,cancelDate,bookingStatus
    ,vehicleType,fare } = booking //destructuring
       return ( 
          <tr key={bookingId}>
             <td>{bookingId}</td>
             <td>{journeyDate}</td>
             <td>{bookingDate}</td>
             <td>{cancelDate}</td>
             <td>{bookingStatus}</td>
             <td>{vehicleType}</td>
             <td>{fare}</td>
             <td>{source}</td>
             <td>{destination}</td>
          </tr>
       )
    })
 };
export default ViewBookingComponent;
