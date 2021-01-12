const initialState = [];
const bookingReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_BOOKING':
            return action.payload;
        case 'VIEW_BOOKING':
            return action.payload;
        case 'CANCEL_BOOKING':
            return action.payload;
        case 'VIEW_BOOKING_BY_NAME':
            return action.payload;
        case 'VIEW_BOOKING_BY_NAME_AND_STATUS':
            return action.payload;   
        default:
            return [];
    }
}

export default bookingReducer;