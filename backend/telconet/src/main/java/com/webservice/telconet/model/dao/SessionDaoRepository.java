package com.webservice.telconet.model.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webservice.telconet.model.entity.Session;

public interface SessionDaoRepository extends JpaRepository<Session, Integer>{

	Optional<Session> findBySessionIdAndState(Integer sessionId, String state);
}
