package com.webservice.telconet.model.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webservice.telconet.model.entity.User;

public interface UserDaoRepository extends JpaRepository<User, Integer>{
	
	Optional<User> findByUserIdAndState(Integer userId, String state);
	
	Optional<User> findByUserNameAndStateOrEmailAndState(String user, String state);
	
	Optional<User> findByUserNameAndPasswordAndStateOrEmailAndPasswordAndState(String user, String password, String state);

}
