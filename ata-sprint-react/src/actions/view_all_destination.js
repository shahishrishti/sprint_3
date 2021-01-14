import axios from 'axios';

let GetAllDestinationAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/route/filterDestination"
          );
          dispatch({type: "VIEW__ALL_ROUTE_DESTINATION", payload: res.data});
    }
}

export default GetAllDestinationAction;
