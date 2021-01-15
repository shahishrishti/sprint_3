import axios from 'axios';

let ViewBookingByStatusAction = (bookingStatus) => {
    return async function(dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/booking/" + bookingStatus , { 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          console.log('View Booking serverResponse: ', res.data);
          dispatch({type: "VIEW_BOOKING_BY_STATUS", payload: res.data});

    }
}

export default ViewBookingByStatusAction;