const routeReducer = (state={route: []}, action) => {
    switch(action.type) {
        case 'ADD_ROUTE':
            state.route.push(action.payload);
            return state;
        case 'VIEW_ROUTE':
            console.log("Action: ", action.payload);
            state.route = action.payload;
            return state;
        case 'DELETE_ROUTE':
            state.route = action.payload;
            return state;
        case 'UPDATE_ROUTE':
            return state;
        default:
            return state;

    }
}

export default routeReducer;
