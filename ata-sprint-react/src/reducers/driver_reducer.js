const initialState = [];
const driverReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_DRIVER':
            return action.payload;
        case 'VIEW_DRIVER':
            return action.payload;
        case 'EDIT_DRIVER':
            return action.payload;
        case 'DELETE_DRIVER':
            return action.payload;

        default:
            return [];
    }
}

export default driverReducer;