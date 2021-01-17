package com.cgtravelagency.repo;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cgtravelagency.entity.BookingEntity;
import com.cgtravelagency.json.Route;
import com.cgtravelagency.json.User;

public interface BookingRepo extends JpaRepository<BookingEntity, Long> {

	//public List<BookingEntity> findByUser(User user);														// find booking by user
	//public List<BookingEntity> findByUserAndBookingStatus(User user, String bookingStatus); 			   // find booking by user and status
	public List<BookingEntity> findByBookingId(long bookingID);											  // find booking by id
//	public List<BookingEntity> findAll();																 // find all bookings
	public List<BookingEntity> findByUserAndRoute(User user, Route route);							    // find booking by user and route
	//public List<BookingEntity> findByRouteId(Long routeid);										   // find booking by route id
	
	public List<BookingEntity> findByBookingStatus(String bookingStatus);
	@Query("Select b from BookingEntity b")
	public List<String> getAllBookings();
	
	
}
