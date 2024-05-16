package com.webservice.telconet.model.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webservice.telconet.model.entity.Person;

public interface PersonDaoRepository extends JpaRepository<Person, Integer>{
	
	//Búsqueda todas las personas activas
	Optional<List<Person>> findAllByState(String state);
	
	//Búsqueda persona por id activas
	Optional<Person> findByPersonIdAndState(Integer personId, String state);

}
