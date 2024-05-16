package com.webservice.telconet.model.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "sessions")
@Data
public class Session {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "session_id")
	private Integer sessionId;
	
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "admission_date")
	private Date admissionDate;
	
	@Column(name = "closing_date")
	private Date closingDate;
	
	@Column(columnDefinition = "varchar(1) not null default 'A'")
	private String state = "A";
	
	@OneToOne
	@JoinColumn(name = "user_id", insertable = false, updatable = false)
	private User user;

}
