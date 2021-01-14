import axios from 'axios';

let addVehicleAction = (vehicleObj) =>{
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/cgata/vehicle/add", 
                { 
                    vehicleNo: vehicleObj.vehicleNo, 
                    vehicleName : vehicleObj.vehicleName, 
                    vehicleType : vehicleObj.vehicleType,
                    fare : vehicleObj.fare,
                    route : {"routeId": vehicleObj.route.routeId},
                    
                    
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
        );
        console.log('Add Vehicle serverResponse: ', res.data);
        dispatch({type: "ADD_VEHICLE", payload: res.data});
    }
}

export default addVehicleAction;
