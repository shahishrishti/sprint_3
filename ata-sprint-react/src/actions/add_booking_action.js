let addBookingAction = (booking) =>{
    return async function (dispatch) {
        const res = await fetch(
            "http://localhost:9090/cgata/booking", { 
                method: "POST", 
                body: JSON.stringify({ 
                    name: booking.name, 
                    bookingdate : booking.bookingdate,
                    journeydate : booking.journeydate,
                    vehicleType : booking.vehicle,
                    route : {"routeId": booking.route.routeId},
                    user : {"userId":booking.user.userId},
                    fare : booking.fare,
                    bookingStatus : booking.bookingStatus,
                }), 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          const data = await res.json();
          dispatch({type: "ADD_BOOKING", payload: data});
    }
}
