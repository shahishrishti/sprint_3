const viewBookingByNameAndStatusAction = (booking)=> {
    return {
      type: 'VIEW_BOOKING_BY_NAME_AND_STATUS',
      payload: booking
    }
  }

  export default viewBookingByNameAndStatusAction;