import axios from 'axios';

let addBookingAction = (bookingObj) =>{
    console.log("booking Action",bookingObj);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:9090/cgata/booking/add", 
                { 
                    bookingDate : bookingObj.bookingDate,
                    journeyDate : bookingObj.journeyDate,
                    vehicleType : bookingObj.vehicleType,
                    route : {"routeid": bookingObj.route.routeid},
                    user : {"userId":bookingObj.user.userId},
                    fare : bookingObj.fare,
                    bookingStatus : bookingObj.bookingStatus,
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
        );
        console.log('Add Booking serverResponse: ', res.data);
        dispatch({type: "ADD_BOOKING", payload: res.data});
    }
}

export default addBookingAction;
