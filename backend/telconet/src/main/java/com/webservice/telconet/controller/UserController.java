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
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/users-list")
	public ResponseEntity<List<User>> getUsersActive(){
		return userService.getUsersActive().map(users -> new ResponseEntity<>(users, HttpStatus.OK)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/session-login")
	public ResponseEntity<Object> sessionLogin(@RequestParam("userName") String userName,
			@RequestParam("password") String password) {

		Optional<User> userLogin = userService.sessionLogin(userName, password);

		if (userLogin.isPresent()) {
			return new ResponseEntity<>(userLogin.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@CrossOrigin(origins = "http://localhost:4200")
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

			String lastName2 = spaceIndex != -1 ? person.getLastName().substring(spaceIndex+1, spaceIndex + 2)
					: person.getLastName();
			
			String mail = "@gmail.com";

			user.setEmail(name.toLowerCase() + lastName1.toLowerCase() + lastName2.toLowerCase() + mail);
			System.out.println(user.getEmail());
		}

		return new ResponseEntity<>(userService.save(user), HttpStatus.CREATED);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/update-user")
	public ResponseEntity<User> update(@RequestBody User user) {
		Optional<User> searchUser = userService.searchUserById(user.getUserId());
		if (searchUser.isPresent()) {
			return new ResponseEntity<>(userService.save(user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@CrossOrigin(origins = "http://localhost:4200")
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
