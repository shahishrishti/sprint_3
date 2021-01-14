import axios from 'axios';

let UpdateDriverAction = (driverObj) => {
    return async function(dispatch) {
        const res = await axios.put(
            "http://localhost:9090/cgata/driver/" + driverObj.id,
                { 
                    name: driverObj.name, 
                    address: driverObj.address,
                    license_no: driverObj.license_no,
                    contact_no:driverObj.contact_no
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          console.log('Update Driver serverResponse: ', res.data);
          dispatch({type: "UPDATE_DRIVER", payload: res.data});

    }
}

export default UpdateDriverAction;










