import axios from 'axios';

let addVehicleAction = (vehicle) =>{
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/cgata/vehicle/add", 
                { 
                    vehicleNo: vehicle.vehicleNo, 
                    vehicleName : vehicle.vehicleName, 
                    vehicleType : vehicle.vehicleType,
                    fare : vehicle.fare,
                    route : {"routeId": vehicle.route.routeId},
                    
                    
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
