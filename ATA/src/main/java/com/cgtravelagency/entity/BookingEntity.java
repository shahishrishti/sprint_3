package com.cgtravelagency.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "booking")
public class BookingEntity {

	
	//--------------------------data members--------------------------------
	@Id
	@GeneratedValue
	@Column(name  = "bookingid")
	private Long bookingId;
	
	@Column(name = "journeydate")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date journeyDate;
	
	@Column(name = "bookingdate")
	@JsonFormat(pattern="yyyy-MM-dd")
	private Date bookingDate;
	
	@Column(name = "canceldate")
	private Date cancelDate;
	
	@Column(name = "fare")
	private double fare;
	
	@Column(name = "bookingstatus")
	private String bookingStatus;
	
	@Column(name = "vehicletype")
	private String vehicleType;
	
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="routeid")
	private RouteEntity route;
	
	@ManyToOne( fetch=FetchType.EAGER)
	@JoinColumn(name="userid")
	private UserEntity user;

	//------------------------default constructor----------------------------------
	public BookingEntity() {
		super();
	}
	
	//-------------------parameterized constructor-----------------------------------
	public BookingEntity(Date journeyDate, Date bookingDate, Date cancelDate, double fare, String bookingStatus,
			String vehicleType, RouteEntity route, UserEntity user) {
		super();
		this.journeyDate = journeyDate;
		this.bookingDate = bookingDate;
		this.cancelDate = cancelDate;
		this.fare = fare;
		this.bookingStatus = bookingStatus;
		this.vehicleType = vehicleType;
		this.route = route;
		this.user = user;
	}

	public BookingEntity(Long bookingId, Date journeyDate, Date bookingDate, Date cancelDate, double fare,
			String bookingStatus, String vehicleType, RouteEntity route, UserEntity user) {
		super();
		this.bookingId = bookingId;
		this.journeyDate = journeyDate;
		this.bookingDate = bookingDate;
		this.cancelDate = cancelDate;
		this.fare = fare;
		this.bookingStatus = bookingStatus;
		this.vehicleType = vehicleType;
		this.route = route;
		this.user = user;
	}

	//------------------------getters and setters--------------------------------------
	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public Date getJourneyDate() {
		return journeyDate;
	}

	public void setJourneyDate(Date journeyDate) {
		this.journeyDate = journeyDate;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public Date getCancelDate() {
		return cancelDate;
	}

	public void setCancelDate(Date cancelDate) {
		this.cancelDate = cancelDate;
	}

	public double getFare() {
		return fare;
	}

	public void setFare(double fare) {
		this.fare = fare;
	}

	public String getBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(String bookingStatus) {
		this.bookingStatus = bookingStatus;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public RouteEntity getRoute() {
		return route;
	}

	public void setRoute(RouteEntity route) {
		this.route = route;
	}

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	//----------------------------toString()---------------------------------------------
	@Override
	public String toString() {
		return "BookingEntity [bookingId=" + bookingId + ", journeyDate=" + journeyDate + ", bookingDate=" + bookingDate
				+ ", cancelDate=" + cancelDate + ", fare=" + fare + ", bookingStatus=" + bookingStatus
				+ ", vehicleType=" + vehicleType + ", route=" + route + ", user=" + user + "]";
	}
	
}
