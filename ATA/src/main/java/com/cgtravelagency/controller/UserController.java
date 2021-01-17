package com.cgtravelagency.controller;

import java.util.List;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgtravelagency.exception.InvalidRouteDataException;
import com.cgtravelagency.exception.InvalidUserDataException;
import com.cgtravelagency.json.Route;
import com.cgtravelagency.json.User;
import com.cgtravelagency.service.UserService;
import com.cgtravelagency.service.UserServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@CrossOrigin("*")
@RequestMapping("/cgata")
@Api(value="User related REST APIs")
public class UserController {

	@Autowired
	private UserService userService;
	private Logger logger = LogManager.getLogger(UserServiceImpl.class.getName());
	
	
	@ApiOperation(value="Add New User")
	@ApiResponses(value= {
			@ApiResponse(code=201, message="New User added")
			
	})
	@PostMapping(value="/user/add", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> createNewEmployee(@Valid @RequestBody User user) throws InvalidUserDataException {
		
		return new ResponseEntity<User>(userService.createNewUser(user), HttpStatus.OK);
		
	}
	
	
	
	
	
	@ApiOperation(value="Returns all user")
	@ApiResponses(value= {
			@ApiResponse(code=201, message="All user found"),
			@ApiResponse(code=404, message="No such user found")
	})
	@GetMapping(value="/user", produces=MediaType.APPLICATION_JSON_VALUE) 
	public List<User> getAllUser() throws InvalidUserDataException {
		
		return userService.getAllUser();
	}
}
