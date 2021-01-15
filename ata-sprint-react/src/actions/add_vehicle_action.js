import axios from 'axios';

let addVehicleAction = (vehicleObj) =>{
    console.log("vehicle obj from action: ", vehicleObj);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/cgata/vehicle/add", 
                { 
                    vehicleNo: vehicleObj.vehicleNo, 
                    vehicleName : vehicleObj.vehicleName, 
                    vehicleType : {"typeId": vehicleObj.vehicleType.typeId},
                    fare : vehicleObj.fare,
                    route : {"routeid": vehicleObj.route.routeid}   
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
