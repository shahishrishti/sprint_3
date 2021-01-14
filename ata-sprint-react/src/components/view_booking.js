import React from 'react';
import '../css/view_booking.css';
import { useSelector, useDispatch } from 'react-redux';
import { ViewBookingAction } from "../actions/view_booking_action";

let dispatch;
export const ViewBookingComponent = (props) => {
    let bookingList = useSelector(state => state);
     dispatch = useDispatch();

    React.useEffect(() => {
        BookingList()
      }, []);
    
      const BookingList = () => {
        dispatch(ViewBookingAction())
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
                        <h3>View Booking</h3>
                    </div>
            <div class="item">
            <table id="bookings">
                <thead>
                  <tr>
                     <th>Booking ID</th>
                     <th>UserID</th>
                     <th>Route ID</th>
                     <th>Journey Date</th>
                     <th>Booking Date</th>
                     <th>Cancel Date</th>
                     <th>Booking Status</th>
                     <th>Vehicle Type</th>
                     <th>Fare</th>
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
    console.log("bookingList: ", bookingList);
    return bookingList.map((booking, index) => {
        const userid = booking.user.userid;
        const routeid=booking.route.routeid;
       const { bookingId,journeydate,bookingdate,canceldate,bookingstatus
    ,vehicletype,fare } = booking //destructuring
       return ( 
          <tr key={bookingId}>
             <td>{bookingId}</td>
             <td>{userid}</td>
             <td>{routeid}</td>
             <td>{journeydate}</td>
             <td>{bookingdate}</td>
             <td>{canceldate}</td>
             <td>{bookingstatus}</td>
             <td>{vehicletype}</td>
             <td>{fare}</td>
          </tr>
       )
    })
 };
export default ViewBookingComponent;
