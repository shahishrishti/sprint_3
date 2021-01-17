package com.cgtravelagency.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cgtravelagency.entity.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, Long>{

}
