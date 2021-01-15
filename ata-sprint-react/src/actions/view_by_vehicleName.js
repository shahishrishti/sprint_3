import axios from 'axios';

let GetVehicleByVehicleName = (vehicleName) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/cgata/vehicle/filter/${vehicleName}`
          );
          console.log("response in action: ", res.data);
          dispatch({type: "VIEW_Vehicle_BY_VEHICLE_NAME", payload: res.data});
    }
}

export default GetVehicleByVehicleName;