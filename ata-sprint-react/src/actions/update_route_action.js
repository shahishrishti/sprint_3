import axios from 'axios';

const UpdateRouteAction = (routeObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            "http://localhost:9090/cgata/route/" + routeObj.id,
                { 
                    source: routeObj.source, 
                    destination: routeObj.destination, 
                    distance: routeObj.distance                   
                    
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          console.log('Update Route serverResponse: ', res.data);
          dispatch({type: "UPDATE_ROUTE", payload: res.data});

    }
}

export default UpdateRouteAction;










