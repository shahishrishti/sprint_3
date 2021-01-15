import axios from 'axios';

let GetDriversAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/cgata/driver"
          );
          dispatch({type: "GET_DRIVERS", payload: res.data});
    }
}

export default GetDriversAction;
