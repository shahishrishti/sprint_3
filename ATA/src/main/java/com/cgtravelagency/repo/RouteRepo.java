package com.cgtravelagency.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cgtravelagency.entity.RouteEntity;

public interface RouteRepo extends JpaRepository<RouteEntity, Long>{

	


	public List<RouteEntity> findBySource(String source);

	public List<RouteEntity> findByDestination(String destination);

	public List<RouteEntity> findByDistance(double distance);

	public List<RouteEntity> findBySourceAndDestination(String source, String destination);
	
	@Query("Select distinct r.source from RouteEntity r")
	public List<String> getAllSource();
	
	@Query("Select distinct r.destination from RouteEntity r")
	public List<String> getAllDestination();
	
	@Query("Select distinct concat(r.source, '-', r.destination) from RouteEntity r")
	public List<String> getAllSourceAndDestination();
	
}
