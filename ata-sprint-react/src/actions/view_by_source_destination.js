import axios from 'axios';

let GetRouteBySourceDestinationAction = (source, destination) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgata/route/${source}/${destination}/filters`
          );
          dispatch({type: "VIEW_ROUTE_SOURCE_DESTINATION", payload: res.data});
    }
}

export default GetRouteBySourceDestinationAction;
