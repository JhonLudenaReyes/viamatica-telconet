package com.webservice.telconet.model.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "person_id")
	private Integer personId;
	
	@Column(name = "user_name", length = 45)
	private String userName;
	
	@Column(length = 45)
	private String password;
	
	@Column(length = 45)
	private String email;
	
	@Column(columnDefinition = "varchar(1) not null default 'A'")
	private String state = "A";

	@ManyToOne
	@JoinColumn(name = "person_id", insertable = false, updatable = false)
	private Person person;
	
	@ManyToMany
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private List<Role> roles;

}
