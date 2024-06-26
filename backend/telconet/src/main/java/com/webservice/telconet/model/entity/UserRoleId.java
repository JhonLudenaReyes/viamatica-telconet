package com.webservice.telconet.model.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class UserRoleId implements Serializable{
	

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "role_id")
	private Integer roleId;

}
