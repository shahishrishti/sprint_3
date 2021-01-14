import axios from 'axios';

let GetRouteAction = () => {
    console.log("ACTION");
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:8080/cgata/route"
          );
          dispatch({type: "VIEW_ROUTE", payload: res.data});
    }
}

export default GetRouteAction;
