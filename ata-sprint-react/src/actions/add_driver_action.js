import axios from 'axios';

const AddDriverAction = (driverObj) => {
    return async function(dispatch) {
        const res = await axios.post(

            "http://localhost:9090/cgata/driver/add",
                { 
                    name: driverObj.name,
                    address: driverObj.address,
                    contact: driverObj.contact,
                    licenseno: driverObj.licenseno,
                    vehicle : {"vehicleNo": driverObj.vehicle.vehicleNo},                    
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": "*"
                }
            );
          console.log('Add Driver serverResponse: ', res.data);
          dispatch({type: "ADD_DRIVER", payload: res.data});

    }
}

export default AddDriverAction;