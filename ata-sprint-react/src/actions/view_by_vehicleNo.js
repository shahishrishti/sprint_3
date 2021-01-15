import axios from 'axios';

let GetVehicleByVehicleNo = (vehicleNo) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/cgata/vehicle/filters/${vehicleNo}`
          );
          console.log("Response from action: ", res.data);
          dispatch({type: "VIEW_Vehicle_BY_VEHICLE_NO", payload: res.data});
    }
}

export default GetVehicleByVehicleNo;