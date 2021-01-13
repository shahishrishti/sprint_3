const PlaceReducer = (state={place: []}, action) => {
    switch(action.type) {
        case 'GET_PLACENAME':
            state.place = action.payload;
            return state;
        default:
            return state;

    }
}

export default PlaceReducer;