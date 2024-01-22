package com.penpick.reservation;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Reservation {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="reservation_seq")
	@SequenceGenerator(name="reservation_seq", sequenceName="reservation_seq", allocationSize=1)
	private long resNum;
	private int id;
	private int userNum;
	private int unuserNum;
	private String roomType;
	private int people;
	private String payment;
	private int pay;
	private Date payDate;
	private String resDate;
	private String pick;
	private String pickTime;
	private String market;
	
}
