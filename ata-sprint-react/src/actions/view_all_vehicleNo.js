import axios from 'axios';

let GetAllVehicleNo = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/cgata/vehicle/filterNo"
          );
          dispatch({type: "VIEW__ALL_Vehicle_No", payload: res.data});
    }
}

export default GetAllVehicleNo;