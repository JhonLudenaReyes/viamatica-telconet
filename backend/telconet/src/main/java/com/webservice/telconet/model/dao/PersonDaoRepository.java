package com.webservice.telconet.model.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webservice.telconet.model.entity.Person;

public interface PersonDaoRepository extends JpaRepository<Person, Integer>{
	
	Optional<List<Person>> findAllByState(String state);

}
