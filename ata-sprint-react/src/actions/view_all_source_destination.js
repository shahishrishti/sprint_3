import axios from 'axios';

let GetAllSourceDestinationAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgata/route/filterSourceDestination"
          );
          dispatch({type: "VIEW__ALL_ROUTE_SOURCE_DESTINATION", payload: res.data});
    }
}

export default GetAllSourceDestinationAction;
