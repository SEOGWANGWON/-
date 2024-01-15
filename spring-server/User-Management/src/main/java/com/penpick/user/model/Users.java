package com.penpick.user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.*;

@Getter @Setter
@Entity
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator="uses_seq")
	@SequenceGenerator(name="users_seq", sequenceName="users_seq",allocationSize=1)
	private Long userId; //PK
	private String email;
	private String passwd;
	
}
