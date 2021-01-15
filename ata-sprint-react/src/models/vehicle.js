class Vehicle {
  constructor(vehicleNo, vehicleName, typeId, seatingCapacity, fare, routeid) {
      this.vehicleNo = vehicleNo;
      this.vehicleName = vehicleName;

      this.typeId  = { "typeId": typeId};
      this.vehicleType = {"typeId": typeId};

      this.seatingCapacity = {"seatingCapaity": seatingCapacity};
      this.vehicleType = {"seatingCapaity": seatingCapacity};


      this.fare = fare;
      this.route = { "routeid": routeid};
  }
}

export default Vehicle;
  