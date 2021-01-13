const initialState = [];
const routeReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_ROUTE':
            return action.payload;
        case 'VIEW_ROUTE':
            return action.payload;
        case 'DELETE_ROUTE':
            return action.payload;
        case 'EDIT_ROUTE':
            return action.payload;
        default:
            return [];
    }
}

export default routeReducer;