
const bookingReducer = (state={booking:[]}, action) =>{
    switch(action.type){
        case 'ADD_BOOKING':
            return action.payload;
        case 'VIEW_BOOKING':
                console.log("action.payload from reducer: ", action.payload);
                state.booking = action.payload;
                return state;
        case 'CANCEL_BOOKING':
            return action.payload;
        case 'VIEW_BOOKING_BY_STATUS':
                console.log("action.payload from reducer: ", action.payload);
                state.booking = action.payload;
                return state;   
        default:
            return state;
    }
}

export default bookingReducer;