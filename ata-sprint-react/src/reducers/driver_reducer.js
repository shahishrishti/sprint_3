const driverReducer = (state={drivers: []}, action) => {
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















