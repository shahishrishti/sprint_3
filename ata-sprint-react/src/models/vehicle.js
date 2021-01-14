class Vehicle {
  constructor(vehicleNo, vehicleName, typeId,fare, routeId) {
      this.vehicleNo = vehicleNo;
      this.vehicleName = vehicleName;
      this.typeId  = { "typeId": typeId};
      this.fare = fare;
      this.routeId = { "routeId": routeId};
  }
}

export default Vehicle;
  