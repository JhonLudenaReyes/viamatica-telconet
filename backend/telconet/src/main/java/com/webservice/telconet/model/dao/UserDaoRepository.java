package com.webservice.telconet.model.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import com.webservice.telconet.model.entity.User;

public interface UserDaoRepository extends JpaRepository<User, Integer>{
	
	Optional<List<User>> findAllByState(String state);
	
	Optional<User> findByUserIdAndState(Integer userId, String state);
	
	Optional<User> findByUserNameAndState(String user, String state);
	
	Optional<User> findByUserNameAndPasswordAndState(String user, String password, String state);
	
	//@Query(value = "select * from users as u inner join people as p on u.person_id = p.person_id where u.state = 'A' and (u.user_name = :user and u.password = :password) or (u.email = :user and u.password = :password)", nativeQuery = true)
	//Optional<User> searchUserByNameorEmail(String user, String password);

}
