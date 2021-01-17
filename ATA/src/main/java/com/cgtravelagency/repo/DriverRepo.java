package com.cgtravelagency.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cgtravelagency.entity.DriverEntity;


public interface DriverRepo extends JpaRepository<DriverEntity, Long> {

	public List<DriverEntity> findByDriverName(String drivername);

	
	public List<DriverEntity> findByLicenseNo(String licenseNo);
	
	@Query("Select distinct d.driverName from DriverEntity d")
	public List<String> getAllDriverName();
	
	@Query("Select distinct d.licenseNo from DriverEntity d")
	public List<String> getAllLicenseNo();
	

}

