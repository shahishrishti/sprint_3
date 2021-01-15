class Booking {
    constructor(bookingId, userid,routeid,journeydate,bookingdate,canceldate,bookingstatus,vehicletype,fare) {
     this.bookingId=bookingId;
     this.userid=userid;
     this.routeid=routeid;
     this.journeydate=journeydate;
     this.bookingdate=bookingdate;
     this.canceldate=canceldate;
     this.bookingstatus=bookingstatus;
     this.vehicletype=vehicletype;
     this.fare=fare;
    }
  }
  
  export default Booking;
  