package com.webservice.telconet.model.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.webservice.telconet.model.entity.Person;

public interface PersonDaoRepository extends JpaRepository<Person, Integer>{
	
	//Búsqueda todas las personas activas
	Optional<List<Person>> findAllByState(String state);
	
	@Query(value = "select p from Person as p where (p.name like %:search% or p.lastName like %:search% or p.identificationCard like %:search% ) and p.state = 'A'")
	Optional<List<Person>> searchPeopleActive(String search);
	
	//Búsqueda persona por id activas
	Optional<Person> findByPersonIdAndState(Integer personId, String state);

}
