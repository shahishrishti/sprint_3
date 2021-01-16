import axios from 'axios';

let GetVehicleAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/vehicle"
          );
          dispatch({type: "VIEW_VEHICLE", payload: res.data});
    }
}

export default GetVehicleAction;