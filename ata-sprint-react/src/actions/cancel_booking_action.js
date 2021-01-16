import axios from 'axios';

const CancelBookingAction = (bookingObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            "http://localhost:9090/cgata/booking" + bookingObj.id,
                { 
                    date: bookingObj.date,
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          console.log('Cancel Booking serverResponse: ', res.data);
          dispatch({type: "CANCEL_BOOKING", payload: res.data});

    }
}

export default CancelBookingAction;