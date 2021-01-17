package com.cgtravelagency.service;

import java.util.List;
import com.cgtravelagency.json.Booking;
import com.cgtravelagency.json.Route;
import com.cgtravelagency.json.User;

public interface BookingService {

	//public List<Booking> findByUser(User user);  
	public List<Booking> findByBookingStatus(String bookingStatus);							//service to find details by user as argument
	//public List<Booking> findByUserAndBookingStatus(User user, String bookingStatus);      //service to find details by user and status as argument
	public List<Booking> findByBookingId(long bookingID);                                 //service to find details by Id as argument
	public Booking addBooking(Booking booking);                                          //service to add details 
	public List<Booking> getAllBookings();												//service to view details all bookings
	public List<Route> getAllRoute();												   //service to all routes
}
