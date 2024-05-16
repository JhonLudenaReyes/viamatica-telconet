package com.webservice.telconet.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.webservice.telconet.model.entity.Session;

@Repository
public interface SessionRepository {
	
	Optional<Session> getSessionBySessionId(Integer sessionId);
	
	Session save(Session session);

}
