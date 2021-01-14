import axios from 'axios';

let GetRouteByDestinationAction = (destination) => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgata/route/${destination}/filter`
          );
          dispatch({type: "VIEW_ROUTE_DESTINATION", payload: res.data});
    }
}

export default GetRouteByDestinationAction;
