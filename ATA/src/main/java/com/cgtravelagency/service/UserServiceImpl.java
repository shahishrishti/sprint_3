package com.cgtravelagency.service;

import java.util.List;

import javax.validation.Valid;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cgtravelagency.entity.UserEntity;
import com.cgtravelagency.json.User;
import com.cgtravelagency.repo.UserRepo;
import com.cgtravelagency.util.RouteUtil;
import com.cgtravelagency.util.UserUtil;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userRepo;
	private Logger logger = LogManager.getLogger(UserServiceImpl.class.getName());
	
	@Override
	public User createNewUser(@Valid User user) {
		UserEntity userEntity = userRepo.save(UserUtil.convertUserIntoUserEntity(user));
		return UserUtil.convertUserEntityIntoUser(userEntity);
	}

	@Override
	public List<User> getAllUser() {
		return UserUtil.convertUserEntityListIntoUserList(userRepo.findAll());
	}

}
