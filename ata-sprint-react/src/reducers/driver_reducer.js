// const driverReducer = (state={driver: [], filter: []}, action) => {
//     switch(action.type) {
       
//         case 'ADD_DRIVER':
//             state.driver.push(action.payload);
//             return state;
//         case 'VIEW_DRIVER':
//             console.log("Action: ", action.payload);
//             state.driver = action.payload;
//             return state;
//         case 'VIEW_DRIVER_BY_NAME':
//             console.log("Action For Source: ", action.payload);
//             state.driver = action.payload;
//             return state;
//         case 'VIEW_DRIVER_BY_LICENSENO':
//             console.log("Action For Source: ", action.payload);
//             state.driver = action.payload;
//             return state;
//         case 'VIEW__ALL_DRIVER_Name':
//             console.log("Filter driver Name from reducer:",action.payload);
//             state.filter=action.payload;
//             return state;
//         case 'VIEW__ALL_DRIVER_licenseno':
//             console.log("Filter license No. from reducer:",action.payload);
//             state.filter=action.payload;
//             return state;
//         case 'DELETE_DRIVER':
//             return action.payload;
//         case 'EDIT_DRIVER':
//             return action.payload;
//         default:
//             return state;
//     }
// }

// export default driverReducer;















const driverReducer = (state={drivers: [], filter: []}, action) => {
    switch(action.type) {
       
        case 'ADD_DRIVER':
            state.drivers.push(action.payload);
            return state;
        case 'VIEW_DRIVER':
            console.log("Action: ", action.payload);
            state.drivers = action.payload;
            return state;
        case 'VIEW_DRIVER_BY_NAME':
            console.log("Driver name from reducer: ", action.payload);
            state.drivers = action.payload;
            return state;
        case 'VIEW_DRIVER_BY_LICENSENO':
            console.log("License no from reducer: ", action.payload);
            state.drivers =[action.payload];
            console.log("Licende no. reducer", action.payload);
            return state;
        case 'VIEW__ALL_DRIVER_Name':
            console.log("Filter driver Name from reducer:",action.payload);
            state.filter=action.payload;
            return state;
        case 'VIEW__ALL_DRIVER_licenseno':
            console.log("Filter license No. from reducer:",action.payload);
            state.filter=action.payload;
            return state;
        case 'DELETE_DRIVER_BY_ID':
            //state.drivers = action.payload;
            return state;
        case 'EDIT_DRIVER':
            return action.payload;
        default:
            return state;
    }
}

export default driverReducer;















