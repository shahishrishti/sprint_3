import axios from 'axios';

const AddRouteAction = (routeObj) => {
    return async function(dispatch) {
        const res = await axios.post(
<<<<<<< HEAD
            "http://localhost:8080/cgata/route/add",
=======
            "http://localhost:9090/cgata/route/add",
>>>>>>> a9f8d133f8059f554b4a76b1adf41869d0e58466
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
