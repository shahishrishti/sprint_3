package com.cgtravelagency.service;

import java.util.ArrayList;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cgtravelagency.json.Booking;
import com.cgtravelagency.json.Route;
import com.cgtravelagency.json.User;
import com.cgtravelagency.json.Vehicle;
import com.cgtravelagency.repo.BookingRepo;
import com.cgtravelagency.repo.RouteRepo;
import com.cgtravelagency.util.BookingUtil;
import com.cgtravelagency.util.VehicleUtil;
import com.cgtravelagency.entity.BookingEntity;
import com.cgtravelagency.entity.RouteEntity;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private BookingRepo bookingRepo;
	@Autowired
	private RouteRepo routeRepo;

	
	/*
	 * @Override public List<Booking> findByUser(User user) { //Method to find
	 * details by user as argument List<BookingEntity> bookingEntityList =
	 * bookingRepo.findByUser(user); List<Booking> bookings = new
	 * ArrayList<Booking>(); for(BookingEntity bookingEntity: bookingEntityList) {
	 * bookings.add(new Booking(bookingEntity.getBookingId(),
	 * bookingEntity.getJourneyDate(), bookingEntity.getBookingDate(),
	 * bookingEntity.getCancelDate(), bookingEntity.getFare(),
	 * bookingEntity.getBookingStatus(), bookingEntity.getVehicleType())); } return
	 * bookings; }
	 * 
	 */
	
	/*
	 * @Override public List<Booking> findByUserAndBookingStatus(User user, String
	 * bookingStatus) { //method to find details by user and status as argument
	 * List<BookingEntity> bookingEntityList =
	 * bookingRepo.findByUserAndBookingStatus(user, bookingStatus); List<Booking>
	 * bookings = new ArrayList<Booking>(); for(BookingEntity bookingEntity:
	 * bookingEntityList) { bookings.add(new Booking(bookingEntity.getBookingId(),
	 * bookingEntity.getJourneyDate(), bookingEntity.getBookingDate(),
	 * bookingEntity.getCancelDate(), bookingEntity.getFare(),
	 * bookingEntity.getBookingStatus(), bookingEntity.getVehicleType())); } return
	 * bookings; }
	 */
	
	
	@Override
	public List<Booking>findByBookingId(long bookingID){								//method to find details by booking id as argument
		List<BookingEntity> bookingEntityList = bookingRepo.findByBookingId(bookingID);
		List<Booking> bookings = new ArrayList<Booking>();
		for(BookingEntity bookingEntity: bookingEntityList) {
		bookings.add(new Booking(bookingEntity.getBookingId(), bookingEntity.getJourneyDate(), bookingEntity.getBookingDate(), 
				bookingEntity.getCancelDate(), bookingEntity.getFare(), bookingEntity.getBookingStatus(), bookingEntity.getVehicleType()));
		}
		return null;
	}
	
	
	/*
	 * @Override public List<Booking> getAllBookings() { //method to view all
	 * bookings List<BookingEntity> bookingEntityList = bookingRepo.findAll();
	 * List<Booking> bookings = new ArrayList<Booking>(); for(BookingEntity
	 * bookingEntity: bookingEntityList) { bookings.add(new
	 * Booking(bookingEntity.getBookingId(), bookingEntity.getJourneyDate(),
	 * bookingEntity.getBookingDate(), bookingEntity.getCancelDate(),
	 * bookingEntity.getFare(), bookingEntity.getBookingStatus(),
	 * bookingEntity.getVehicleType())); } return bookings; }
	 */
	
	
	@Override
	public List<Booking> getAllBookings() {
		return  BookingUtil.convertBookingEntityListIntoBookingList(bookingRepo.findAll());
	}
	
	
	@Override 
	public List<Route> getAllRoute() { 												//method to get all routes based on bookings
		List<RouteEntity>routeEntityList =routeRepo.findAll();
		List<Route> routes = new  ArrayList<Route>(); 
		for(RouteEntity routeEntity: routeEntityList) {
			routes.add(new Route(routeEntity.getRouteId(),routeEntity.getSource(),
			  routeEntity.getDestination(),routeEntity.getDistance()));
		}
		return routes; 
	}
	
	@Override
	//@Transactional
	public Booking addBooking(Booking booking) {
			BookingEntity bookingEntity=BookingUtil.convertBookingIntoBookingEntity(booking);
			 bookingEntity= bookingRepo.save(bookingEntity);
			return BookingUtil.convertBookingEntityIntoBooking(bookingEntity);
	}
	
	//----------------------------------View bookings by status-------------------------//
		@Override
		public List<Booking> findByBookingStatus(String bookingStatus) {
			return BookingUtil.convertBookingEntityListIntoBookingList(bookingRepo.findByBookingStatus(bookingStatus));
		}


}