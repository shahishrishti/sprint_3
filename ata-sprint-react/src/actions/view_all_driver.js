import axios from 'axios';

let GetDriverAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/driver"
          );
          dispatch({type: "VIEW_DRIVER", payload: res.data});
    }
}

export default GetDriverAction;
