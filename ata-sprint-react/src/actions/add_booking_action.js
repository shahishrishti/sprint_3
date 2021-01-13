const { default: axios } = require("axios");

let addBookingAction = (booking) =>{
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:9090/cgata/booking", 
                { 
                    name: booking.name, 
                    bookingdate : booking.bookingdate,
                    journeydate : booking.journeydate,
                    vehicleType : booking.vehicle,
                    route : {"routeId": booking.route.routeId},
                    user : {"userId":booking.user.userId},
                    fare : booking.fare,
                    bookingStatus : booking.bookingStatus,
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
        );
        console.log('Add Booking serverResponse: ', res.data);
        dispatch({type: "ADD_BOOKING", payload: res.data});
    }
}
