package com.penpick.users;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Users {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user_seq")
	@SequenceGenerator(name="user_seq",	sequenceName="user_seq", allocationSize=1)
	private int userNum;
	
	private String userEmail;
	
	private String userPw;

	private String userNickname;

	private String userBirth;

	private String userPhone;

	private Date userDate;

	private String userGender;

	private String point;
}
