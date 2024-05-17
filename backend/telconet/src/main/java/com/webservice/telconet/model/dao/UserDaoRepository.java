package com.webservice.telconet.model.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.webservice.telconet.model.entity.User;

public interface UserDaoRepository extends JpaRepository<User, Integer>{
	
	Optional<User> findByUserIdAndState(Integer userId, String state);
	
	Optional<User> findByUserNameAndStateOrEmailAndState(String user, String state);
	
	@Query("call Sp_LoginSession(:user, :password)")
	Optional<User> searchUserByNameorEmail(String user, String password);

}
