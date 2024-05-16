package com.webservice.telconet.controller;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webservice.telconet.model.entity.Session;
import com.webservice.telconet.service.SessionService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("sessions")
public class SessionController {
	
	@Autowired
	private SessionService sessionService;
	
	
	
	@PostMapping("save-session")
	public ResponseEntity<Session> save(){
		Session session = new Session();
		session.setAdmissionDate(new Date());
		
		return new ResponseEntity<>(sessionService.save(session), HttpStatus.CREATED);
	}
	
	@PutMapping("/update-session")
	public ResponseEntity<Session> update(@RequestBody Session session){
		
		Optional<Session> searchSession = sessionService.getSessionBySessionId(session.getSessionId());
		
		if(searchSession.isPresent()) {
			
			return new ResponseEntity<>(sessionService.save(session), HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/delete-session")
	public ResponseEntity<Session> delete(@RequestParam("sessionId") int sessionId){
		Optional<Session> searchSession = sessionService.getSessionBySessionId(sessionId);
		
		if(searchSession.isPresent()) {
			Session seassionUpdate = searchSession.get();
			seassionUpdate.setState("I");
			return new ResponseEntity<>(sessionService.save(seassionUpdate), HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	

}
