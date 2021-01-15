const driverReducer = (state={drivers: []}, action) => {
    switch(action.type) {
       
        case 'ADD_DRIVER':
            state.driver.push(action.payload);
            return action.payload;
        case 'VIEW_DRIVER':
            return action.payload;
        case 'DELETE_DRIVER':
            return action.payload;
        case 'EDIT_DRIVER':
            return action.payload;
        default:
            return state;
    }
}

export default driverReducer;















