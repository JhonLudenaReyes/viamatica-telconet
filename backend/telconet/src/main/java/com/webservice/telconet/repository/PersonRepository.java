package com.webservice.telconet.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.webservice.telconet.model.entity.Person;

@Repository
public interface PersonRepository {
	
	Optional<List<Person>> getPeopleActives();
	
	Optional<List<Person>> searchPeopleActive(String search);
	
	Optional<Person> getPersonByPersonId(Integer personId);
	
	Person save(Person person);

}
