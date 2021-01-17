
const routeReducer = (state={routes: [], filter: []}, action) => {
    switch(action.type) {
        case 'ADD_ROUTE':
            state.routes.push(action.payload);
            return state;
        case 'VIEW_ROUTE':
            console.log("Action: ", action.payload);
            state.routes = action.payload;
            return state;
        case 'VIEW_ROUTE_SOURCE':
            console.log("Action For Source: ", action.payload);
            state.routes = action.payload;
            return state;
        case 'VIEW_ROUTE_DESTINATION':
            console.log("Action For Distance: ", action.payload);
            state.routes = action.payload;
            return state;
        case 'VIEW_ROUTE_SOURCE_DESTINATION':
            console.log("Action For Source & Distance: ", action.payload);
            state.routes = action.payload;
            return state;
        case 'VIEW__ALL_ROUTE_SOURCE_DESTINATION':
            console.log("Action For All Source & Distance: ", action.payload);
            state.filter = action.payload;
            return state;
        case 'VIEW__ALL_ROUTE_SOURCE':
            console.log("Action For All Source: ", action.payload);
            state.filter=action.payload;
            return state;
        case 'VIEW__ALL_ROUTE_DESTINATION':
            console.log("Action For All Destination: ", action.payload);
            state.filter = action.payload;
            return state;
        case 'DELETE_ROUTE':
            return state;
        case 'UPDATE_ROUTE':
            return state;
        default:
            return state;

    }
}
export default routeReducer;