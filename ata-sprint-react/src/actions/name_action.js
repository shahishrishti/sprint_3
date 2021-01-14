import axios from 'axios';

let GetDriverNameAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/driver"
          );
          dispatch({type: "GET_DRIVERNAME", payload: res.data});
    }
}

export default GetDriverNameAction;