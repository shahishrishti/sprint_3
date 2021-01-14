class Vehicle {
  constructor(vehicleNo, vehicleName, typeId, fare, routeid) {
      this.vehicleNo = vehicleNo;
      this.vehicleName = vehicleName;
<<<<<<< HEAD
      this.typeId  = { "typeId": typeId};
=======
      this.vehicleType = {"typeId": typeId};
>>>>>>> 4a3841d8a746a2e1df419dab92e9896e47c43d84
      this.fare = fare;
      this.route = { "routeid": routeid};
  }
}

export default Vehicle;
  