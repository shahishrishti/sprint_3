class Vehicle {
  constructor(vehicleNo, vehicleName, typeId, fare, routeid) {
      this.vehicleNo = vehicleNo;
      this.vehicleName = vehicleName;
      this.vehicleType = {"typeId": typeId};
      this.fare = fare;
      this.route = { "routeid": routeid};
  }
}

export default Vehicle;
  