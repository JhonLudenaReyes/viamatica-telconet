package com.webservice.telconet.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webservice.telconet.model.dao.SessionDaoRepository;
import com.webservice.telconet.model.entity.Session;
import com.webservice.telconet.repository.SessionRepository;

@Service
public class SessionService implements SessionRepository {

	@Autowired
	private SessionDaoRepository sessionDaoRepository;

	@Override
	public Optional<Session> getSessionBySessionId(Integer sessionId) {
		// TODO Auto-generated method stub
		return sessionDaoRepository.findBySessionIdAndState(sessionId, "A");
	}

	@Override
	public Session save(Session session) {
		// TODO Auto-generated method stub
		return sessionDaoRepository.save(session);
	}

}
