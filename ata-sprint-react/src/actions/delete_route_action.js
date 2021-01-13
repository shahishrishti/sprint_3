import axios from 'axios';

const DeleteRouteAction = (routeId) => {
    return async function(dispatch) {
        const res = await axios.delete(
            "http://localhost:9090/cgata/route/" + routeId, { 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          console.log('Delete Route serverResponse: ', res.data);
          dispatch({type: "DELETE_ROUTE", payload: res.data});

    }
}

export default DeleteRouteAction;