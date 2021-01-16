import axios from 'axios';

let GetDriverByLicensenoAction = (licenseNo) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgata/driver/filters/${licenseNo}`
          );
          dispatch({type: "VIEW_DRIVER_BY_LICENSENO", payload: res.data});
    }
}

export default GetDriverByLicensenoAction;