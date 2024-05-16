package com.webservice.telconet.model.entity;



import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "users_roles")
@Data
public class UserRole {
	
	@EmbeddedId
	private UserRoleId userRoleId;

}
