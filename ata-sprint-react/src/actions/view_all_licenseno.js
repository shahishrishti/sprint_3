import axios from 'axios';

let GetAllDriverLicenseno = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/driver/filterLicenseno"
          );
          console.log("License Nos from action: ", res.data);
          dispatch({type: "VIEW__ALL_DRIVER_licenseno", payload: res.data});
    }
}

export default GetAllDriverLicenseno;