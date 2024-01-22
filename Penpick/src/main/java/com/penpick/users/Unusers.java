package com.penpick.users;

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
public class Unusers {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="unuser_seq")
	@SequenceGenerator(name="unuser_seq",	sequenceName="unuser_seq", allocationSize=1)
	private int unuserNum;
	private String unuserPhone;
	private String unuserPw;
	
}
