import axios from 'axios';

let GetDriverByLicensenoAction = (source) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/driver/{licenseNo}/filters`
          );
          dispatch({type: "VIEW_DRIVER_BY_LICENSENO", payload: res.data});
    }
}

export default GetDriverByLicensenoAction;