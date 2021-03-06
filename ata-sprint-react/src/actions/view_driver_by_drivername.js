import axios from 'axios';

let GetDriverByNameAction = (driverName) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgata/driver/filter/${driverName}`
          );
          dispatch({type: "VIEW_DRIVER_BY_NAME", payload: res.data});
    }
}

export default GetDriverByNameAction;