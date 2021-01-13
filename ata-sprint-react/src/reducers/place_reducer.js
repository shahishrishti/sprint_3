const placeReducer = (state={place: []}, action) => {
    switch(action.type) {
        case 'GET_PLACENAME':
            console.log("ACtion: ", action.payload);
            state.place = action.payload;
            return state;
        default:
            return state;

    }
}

export default placeReducer; 