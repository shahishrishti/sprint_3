import axios from 'axios';

const DeleteDriverAction = (driverId) => {
    console.log("driverId from action: ", driverId);
    return async function(dispatch) {
        const res = await axios.delete(
            "http://localhost:9090/cgata/driver/delete/"  + driverId, { 
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
          console.log('Delete Driver serverResponse: ', res.data);
          dispatch({type: "DELETE_DRIVER_BY_ID", payload: res.data});

    }
}

export default DeleteDriverAction;









