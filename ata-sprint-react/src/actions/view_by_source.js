import axios from 'axios';

let GetRouteBySourceAction = (source) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgata/route/${source}`
          );
          dispatch({type: "VIEW_ROUTE_SOURCE", payload: res.data});
    }
}

export default GetRouteBySourceAction;
