class Booking {
  constructor(journeyDate,bookingDate,vehicleType,routeid,userId,fare,bookingStatus){
      this.journeyDate=journeyDate;
      this.bookingDate=bookingDate;
      this.vehicleType=vehicleType;
      
      //this.routeid={"routeid": routeid};
      this.route={"routeid": routeid};

      //this.userId={"userId": userId};
      this.user={"userId": userId};

      this.fare=fare;
      this.bookingStatus=bookingStatus;
  }
}
export default Booking;
  