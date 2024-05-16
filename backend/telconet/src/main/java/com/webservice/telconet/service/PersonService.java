package com.webservice.telconet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webservice.telconet.model.dao.PersonDaoRepository;
import com.webservice.telconet.model.entity.Person;
import com.webservice.telconet.repository.PersonRepository;

@Service
public class PersonService implements PersonRepository{
	
	@Autowired
	private PersonDaoRepository personDaoRepository;

	@Override
	public Optional<List<Person>> getPeopleActives() {
		// TODO Auto-generated method stub
		return personDaoRepository.findAllByState("A");
	}

}
