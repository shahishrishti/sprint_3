import axios from 'axios';

let GetAllDriverName = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/driver/filterNames"
          );
          dispatch({type: "VIEW__ALL_DRIVER_Name", payload: res.data});
    }
}

export default GetAllDriverName;
