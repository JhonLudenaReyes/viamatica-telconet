package com.webservice.telconet.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.webservice.telconet.model.entity.User;

@Repository
public interface UserRepository {
	
	User save(User user);
	
	Optional<List<User>> getUsersActive();
	
	Optional<User> searchUserById(Integer userId);
	
	Optional<User> searchUser(String user);
	
	Optional<User> sessionLogin(String user, String password);
	
	Optional<User> sessionLoginSearch(String user, String password);
	
	

}
