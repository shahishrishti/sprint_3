const initialState = [];
const productReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_ROUTE':
            return action.payload;
        case 'VIEW_ROUTE':
            return action.payload;
        default:
            return [];
    }
}

export default productReducer;