package com.cgtravelagency.util;

import java.util.ArrayList;
import java.util.List;

import com.cgtravelagency.entity.BookingEntity;
import com.cgtravelagency.entity.PlaceEntity;
import com.cgtravelagency.entity.VehicleEntity;
import com.cgtravelagency.json.Booking;
import com.cgtravelagency.json.Place;
import com.cgtravelagency.json.Vehicle;

public class BookingUtil {

	public  static BookingEntity convertBookingIntoBookingEntity(Booking booking) 
	{
		return new BookingEntity(booking.getJourneyDate(),booking.getBookingDate(),booking.getCancelDate(),
				booking.getFare(),booking.getBookingStatus(),booking.getVehicleType(),RouteUtil.convertRouteIntoRouteEntity(booking.getRoute()),
				UserUtil.convertUserIntoUserEntity(booking.getUser()));
	}

	public  static Booking convertBookingEntityIntoBooking(BookingEntity bookingEntity)
	{
		return new Booking(bookingEntity.getBookingId(),bookingEntity.getJourneyDate(),bookingEntity.getBookingDate()
				,bookingEntity.getCancelDate(),bookingEntity.getFare(),bookingEntity.getBookingStatus(),
				bookingEntity.getVehicleType(),RouteUtil.convertRouteEntityIntoRoute(bookingEntity.getRoute()),
				UserUtil.convertUserEntityIntoUser(bookingEntity.getUser()));
	}
	
	public static List<Booking> convertRouteEntityListIntoBookingList(List<BookingEntity> bookingEntityList) {
		List<Booking> booking = new ArrayList<Booking>();
		for(BookingEntity bookingEntity: bookingEntityList) {
			booking.add(convertBookingEntityIntoBooking(bookingEntity));
		}
		return booking;
	}
	
	
	
	public  static List<Booking> convertBookingEntityListIntoBookingList(List<BookingEntity> bookingEntityList)
	{
		List<Booking> bookings = new ArrayList<Booking>();
		for(BookingEntity bookingEntity: bookingEntityList) {
			bookings.add(convertBookingEntityIntoBooking(bookingEntity));
		}
		return bookings;
	}
}
