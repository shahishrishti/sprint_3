import axios from 'axios';

let GetAllVehicleName = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/vehicle/filterNames"
          );
          dispatch({type: "VIEW__ALL_Vehicle_Name", payload: res.data});
    }
}

export default GetAllVehicleName;
