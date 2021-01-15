import axios from 'axios';

let GetVehicleNoAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/vehicle/filterNo"
          );
          console.log("View vwhicle no action: ", res.data);
          dispatch({type: "VIEW_VEHICLE", payload: res.data});
    }
}

export default GetVehicleNoAction;