
const vehicleReducer = (state={vehicle: []}, action) =>{
    switch(action.type){
        case 'ADD_VEHICLE':
            state.vehicle.push(action.payload);
            return state;
        case 'VIEW_VEHICLE':
            console.log("action.payload from reducer: ", action.payload);
            state.vehicle = action.payload;
            return state;
        case 'DELETE_VEHICLE':
            return action.payload;
        case 'EDIT_VEHICLE':
            return action.payload;
        default:
            return state;
    }
}

export default vehicleReducer;