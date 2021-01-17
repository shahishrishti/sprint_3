package com.cgtravelagency.service;

import java.util.List;

import com.cgtravelagency.exception.InvalidDriverDataException;
import com.cgtravelagency.json.Driver;


public interface DriverService {


	public List<Driver> getAllDrivers()throws  InvalidDriverDataException;
	
	public Driver createNewDriver( Driver driver)throws  InvalidDriverDataException;

	public List<Driver> getDriverByName(String drivername)throws  InvalidDriverDataException;

	public List<Driver> getDriverByLicenseNo(String licenseNo)throws  InvalidDriverDataException;
	
	public Driver deleteDriver(Long driverId) throws InvalidDriverDataException;
	
	public Driver updatedriver(Long driverId, Driver driver) throws InvalidDriverDataException;
	
	public List<String> getAllDriverName();
	public List<String> getAllLicenseNo();

}

