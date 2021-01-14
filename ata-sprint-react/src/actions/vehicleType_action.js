import axios from 'axios';

let GetVehicleTypeAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/vehicletype"
          );
          dispatch({type: "GET_VEHICLETYPE", payload: res.data});
    }
}

export default GetVehicleTypeAction;
