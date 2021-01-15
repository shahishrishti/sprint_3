
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
        case 'VIEW_BOOKING_BY_NAME':
            return action.payload;
        case 'VIEW_BOOKING_BY_NAME_AND_STATUS':
            return action.payload;   
        default:
            return state;
    }
}

export default bookingReducer;