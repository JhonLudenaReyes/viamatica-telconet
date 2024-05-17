package com.webservice.telconet.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webservice.telconet.model.dao.UserDaoRepository;
import com.webservice.telconet.model.entity.User;
import com.webservice.telconet.repository.UserRepository;

@Service
public class UserService implements UserRepository{
	
	@Autowired
	private UserDaoRepository userDaoRepository;

	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return userDaoRepository.save(user);
	}
	
	@Override
	public Optional<User> searchUserById(Integer userId) {
		// TODO Auto-generated method stub
		return userDaoRepository.findByUserIdAndState(userId, "A");
	}

	@Override
	public Optional<User> sessionLogin(String user, String password) {
		// TODO Auto-generated method stub
		return userDaoRepository.searchUserByNameorEmail(user, password);
	}

	@Override
	public Optional<User> searchUser(String user) {
		// TODO Auto-generated method stub
		return userDaoRepository.findByUserNameAndStateOrEmailAndState(user, "A");
	}

	
	

}
