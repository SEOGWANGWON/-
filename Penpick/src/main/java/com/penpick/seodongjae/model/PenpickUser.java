package com.penpick.seodongjae.model;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
public class PenpickUser {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="user_add_seq")
	@SequenceGenerator(name="user_add_seq",sequenceName="user_add_seq",allocationSize=1)
	private Long id;

	private String gender;
	private String accessToken;
	private String nickname;
	private String email;
	private String password;
	private String phoneNumber;
}
