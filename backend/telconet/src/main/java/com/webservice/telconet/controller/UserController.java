package com.webservice.telconet.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webservice.telconet.model.entity.Person;
import com.webservice.telconet.model.entity.User;
import com.webservice.telconet.service.PersonService;
import com.webservice.telconet.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private PersonService personService;

	@GetMapping("/session-login")
	public ResponseEntity<User> sessionLogin(@RequestBody User user) {

		if (user.getUserName().isEmpty()) {

			return userService.sessionLogin(user.getUserName(), user.getPassword())
					.map(userLogin -> new ResponseEntity<>(userLogin, HttpStatus.OK))
					.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		} else {
			return userService.sessionLogin(user.getEmail(), user.getPassword())
					.map(userLogin -> new ResponseEntity<>(userLogin, HttpStatus.OK))
					.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));

		}

	}

	@PostMapping("save-user")
	public ResponseEntity<User> saveUser(@RequestBody User user) {

		Optional<Person> searchPerson = personService.getPersonByPersonId(user.getPersonId());

		if (searchPerson.isPresent()) {
			Person person = searchPerson.get();

			// Capturo primera letra del nombre
			String name = String.valueOf(person.getName().charAt(0));

			// Capturo primer apellido
			int spaceIndex = person.getLastName().indexOf(" ");
			String lastName1 = spaceIndex != -1 ? person.getLastName().substring(0, spaceIndex) : person.getLastName();

			String lastName2 = spaceIndex != -1 ? person.getLastName().substring(spaceIndex, spaceIndex + 1)
					: person.getLastName();

			user.setEmail(name + lastName1 + lastName2+"@gmail.com");
		}

		return new ResponseEntity<>(userService.save(user), HttpStatus.CREATED);
	}

	@PutMapping("/update-user")
	public ResponseEntity<User> update(@RequestBody User user) {
		Optional<User> searchUser = userService.searchUserById(user.getUserId());
		if (searchUser.isPresent()) {
			return new ResponseEntity<>(userService.save(user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@DeleteMapping("/delete-user")
	public ResponseEntity<User> delete(@RequestParam("userId") int userId) {
		Optional<User> searchUser = userService.searchUserById(userId);

		if (searchUser.isPresent()) {
			User userUpdate = searchUser.get();
			userUpdate.setState("I");
			return new ResponseEntity<>(userService.save(userUpdate), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
