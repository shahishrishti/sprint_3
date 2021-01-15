
const vehicleReducer = (state={vehicle: [] , filter: []},  action) =>{
    switch(action.type){
        case 'ADD_VEHICLE':
            state.vehicle.push(action.payload);
            return state;
        case 'VIEW_VEHICLE':
            console.log("VEhicle from reducer: ", action.payload);
            state.vehicle=action.payload
            return state;           
        case 'DELETE_VEHICLE':
            return action.payload;
        case 'EDIT_VEHICLE':
            return action.payload;
        case 'VIEW__ALL_Vehicle_No':
            console.log("Filter vehicle No. from reducer:",action.payload);
            state.filter=action.payload;
            return state;
        case 'VIEW__ALL_Vehicle_Name':
            console.log("Filter vehicle Name from reducer:",action.payload);
            state.filter=action.payload;
            return state;
        case 'VIEW_Vehicle_BY_VEHICLE_NAME':
            console.log(" vehicle Name from reducer:",action.payload);
            state.vehicle=action.payload;
            return state;
        case 'VIEW_Vehicle_BY_VEHICLE_NO':
                console.log("vehicle No from reducer:",action.payload);
                state.vehicle=action.payload;
                return state;
        default:
            return state;
    }
}

export default vehicleReducer;