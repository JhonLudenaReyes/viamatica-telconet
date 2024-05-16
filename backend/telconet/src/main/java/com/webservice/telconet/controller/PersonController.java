package com.webservice.telconet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webservice.telconet.model.entity.Person;
import com.webservice.telconet.service.PersonService;

@RestController
@RequestMapping("/people")
public class PersonController {

	@Autowired
	private PersonService personService;

	@GetMapping("/people-list")
	public ResponseEntity<List<Person>> getPeopleActives() {
		return personService.getPeopleActives().map(people -> new ResponseEntity<>(people, HttpStatus.OK))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

}
