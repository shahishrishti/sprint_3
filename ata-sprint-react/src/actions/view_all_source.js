import axios from 'axios';

let GetAllSourceAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/route/filterSource"
          );
          dispatch({type: "VIEW__ALL_ROUTE_SOURCE", payload: res.data});
    }
}

export default GetAllSourceAction;
