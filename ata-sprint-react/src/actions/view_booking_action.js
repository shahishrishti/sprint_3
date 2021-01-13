import axios from 'axios';

let ViewBookingAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/booking"
          );
          dispatch({type: "VIEW_BOOKING", payload: res.data});
    }
}

export default ViewBookingAction;