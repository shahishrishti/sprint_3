const viewBookingByNameAction = (booking)=> {
    return {
      type: 'VIEW_BOOKING_BY_NAME',
      payload: booking
    }
  }

  export default viewBookingByNameAction;