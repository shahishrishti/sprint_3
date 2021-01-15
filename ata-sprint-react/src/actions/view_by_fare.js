import axios from 'axios';

let GetVehicleByFare = (fare) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:8080/cgata/vehicle/filtering/${fare}`
          );
          dispatch({type: "VIEW_Vehicle_BY_FARE", payload: res.data});
    }
}

export default GetVehicleByFare;