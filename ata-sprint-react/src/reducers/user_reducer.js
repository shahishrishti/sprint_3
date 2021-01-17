const userReducer = (state={user:[]},action) => {
    switch(action.type){
        case 'GET_USER':
            console.log("Action: ",action.payload);
            state.user = action.payload;
            return state;
        default:
            return state;
    }
}
export default userReducer;