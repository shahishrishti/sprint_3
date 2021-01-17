const vehicletypeReducer = (state={vehicletype: []}, action) => {
    switch(action.type) {
        case 'GET_VEHICLETYPE':
            console.log("ACtion: ", action.payload);
            state.vehicletype = action.payload;
            return state;
        default:
            return state;

    }
}

export default vehicletypeReducer; 