const initialState = [];
const vehicleReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_VEHICLE':
            return action.payload;
        case 'VIEW_VEHICLE':
            return action.payload;
        case 'DELETE_VEHICLE':
            return action.payload;
        case 'EDIT_VEHICLE':
            return action.payload;
        default:
            return [];
    }
}