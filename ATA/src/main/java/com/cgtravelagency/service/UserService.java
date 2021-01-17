package com.cgtravelagency.service;

import java.util.List;

import javax.validation.Valid;


import com.cgtravelagency.json.User;

public interface UserService {

	public User createNewUser(@Valid User user);

	public List<User> getAllUser();
}
