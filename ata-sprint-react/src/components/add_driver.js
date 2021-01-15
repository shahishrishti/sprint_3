import React from 'react';
import '../css/add_route.css'
import { useSelector, useDispatch } from 'react-redux';
import GetVehicleNoAction from '../actions/view_all_vehicleno_action';
import AddDriverAction from '../actions/add_driver_action';
import Driver from '../models/driver';

let dispatch;
let selectedVehicleNo;

export const AddDriverComponent = (props) => {
  
    dispatch = useDispatch();
    let vehicleList = useSelector(state => state.vehicleReducer.vehicle);
    console.log("vehicle List from line 15: ", vehicleList);
   
    React.useEffect(() => {
        VehicleList()
    }, []);

    const VehicleList = () => {
        console.log("HEllo");
        dispatch(GetVehicleNoAction());
    }
    console.log("vehicleNo: ", vehicleList);
    if(!Array.isArray(vehicleList)) {
        vehicleList = [];
        console.log("Set vehicleNoList to blank array");
    }
    return (
        <body>
        <div class="testbox">
        <form onSubmit={handleSubmit}>
          <div class="banner">
            <h1>Add Driver</h1>
          </div>
          <div class="item">
            <p>Driver name</p>
              <input type="text" name="name" placeholder="Enter your name" />
          </div>
          <div class="item">
            <p>Driver address</p>
            <div class="address-item">
              <input type="text" name="address" placeholder="Enter your address" />
            </div>
          </div>
          <div class="item">
            <p>Phone</p>
            <input type="text" name="phone" placeholder="### ### ####"/>
          </div>
          <div class="item">
            <p>License Number</p>
            <div class="address-item">
              <input type="text" name="number" placeholder="Enter license number" />
            </div>
          </div>
          <div class="item">
               <p>Vehicle No</p>
               <select id="vehicleno" onChange={handleChangeVehicleNo} required>
                        {renderVehicle(vehicleList)}
                    </select>
             </div>
          
          
            <div class="btn-block">
              <button type="submit" href="/">Add </button>
            </div>
        </form>
        </div>
      </body>  
  );

}


function handleChangeVehicleNo(event){
  selectedVehicleNo =event.target.value;
  console.log("selected Vehicle : ",selectedVehicleNo);
}

function renderVehicle(vehicleList){
  console.log("vehicleList: ",vehicleList);
  return vehicleList.map((vehicle) =>{
      console.log("vehicleno: ", vehicle);
      return(
          <option key={vehicle} value={vehicle}>{vehicle}</option>
      )
  })
};



function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target)
  const name=data.get('name');
  const address=data.get('address');
  const contact=data.get('contact');
  const licenseno=data.get('licenseno')
  console.log(name);
  console.log(address);
  console.log(contact);
  console.log(licenseno);
  if(name===''){
      alert("Name cannot be blank");
      return;
  } else if(address==='') {
      alert("Address  cannot be blank");
      return;
  }
  else if(contact==='') {
    alert("Contact  cannot be blank");
    return;
}
else if(licenseno==='') {
  alert("License number cannot be blank");
  return;
}
  console.log("VehicleNo ", selectedVehicleNo)
  const driverObj = new Driver(name, address, contact, licenseno, selectedVehicleNo );
  dispatch(AddDriverAction(driverObj));
}