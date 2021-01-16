
const bookingReducer = (state={booking:[]}, action) =>{
    switch(action.type){
        case 'ADD_BOOKING':
            state.booking.push(action.payload);
            return state;
        case 'VIEW_BOOKING':
            console.log("action.payload from reducer: ", action.payload);
            state.booking = action.payload;
            return state;
        case 'CANCEL_BOOKING':
            state.booking=action.payload;
        case 'VIEW_BOOKING_BY_STATUS':
            console.log("action.payload from reducer: ", action.payload);
            state.booking = action.payload;
            return state;   
        default:
            return state;
    }
}

export default bookingReducer;