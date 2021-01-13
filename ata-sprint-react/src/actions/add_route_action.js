import axios from 'axios';

const AddRouteAction = (routeObj) => {
    return async function(dispatch) {
        const res = await axios.post(
            "http://localhost:9090/cgata/route",
                { 
                    source: routeObj.source,
                    destination: routeObj.destination,
                    distance: routeObj.distance
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          console.log('Add Route serverResponse: ', res.data);
          dispatch({type: "ADD_ROUTE", payload: res.data});

    }
}

export default AddRouteAction;
