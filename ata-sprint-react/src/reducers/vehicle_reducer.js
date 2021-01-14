
const vehicleReducer = (state={vehicle: []}, action) =>{
    switch(action.type){
        case 'ADD_VEHICLE':
            state.vehicle.push(action.payload);
            return action.payload;
        case 'VIEW_VEHICLE':
            return action.payload;
        case 'DELETE_VEHICLE':
            return action.payload;
        case 'EDIT_VEHICLE':
            return action.payload;
        default:
            return state;
    }
}

export default vehicleReducer;