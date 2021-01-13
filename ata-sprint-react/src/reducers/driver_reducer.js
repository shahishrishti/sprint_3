const driverReducer = (state={products: []}, action) => {
    switch(action.type) {
       
        case 'DELETE_DRIVER':
            state.driver = action.payload;
            return state;
        case 'UPDATE_DRIVER':
            return state;
        default:
            return state;

    }
}



export default driverReducer;
















/*  const initialState = [];
const driverReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_DRIVER':
            return action.payload;
        case 'VIEW_DRIVER':
            return action.payload;
        case 'UPDATE_DRIVER':
            return action.payload;
        case 'DELETE_DRIVER':
            return action.payload;

        default:
            return [];
    }
}

export default driverReducer;    */