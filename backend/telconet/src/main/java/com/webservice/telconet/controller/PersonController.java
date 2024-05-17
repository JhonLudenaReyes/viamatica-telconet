package com.webservice.telconet.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webservice.telconet.model.entity.Person;
import com.webservice.telconet.service.PersonService;

import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/people")
public class PersonController {

	@Autowired
	private PersonService personService;

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/people-list")
	public ResponseEntity<List<Person>> getPeopleActives() {
		return personService.getPeopleActives().map(people -> new ResponseEntity<>(people, HttpStatus.OK))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/save-person")
	public ResponseEntity<Person> save(@RequestBody Person person){
		return new ResponseEntity<>(personService.save(person), HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update-person")
	public ResponseEntity<Person> update(@RequestBody Person person){
		Optional<Person> searchPerson = personService.getPersonByPersonId(person.getPersonId());
		
		if(searchPerson.isPresent()) {
			return new ResponseEntity<>(personService.save(person), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete-person")
	public ResponseEntity<Person> delete(@PathParam("personId") int personId){
		Optional<Person> searchPerson = personService.getPersonByPersonId(personId);
		
		if(searchPerson.isPresent()) {
			Person personUpdate = searchPerson.get();
			personUpdate.setState("I");
			return new ResponseEntity<>(personService.save(personUpdate), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
