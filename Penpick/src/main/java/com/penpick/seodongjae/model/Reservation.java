package com.penpick.seodongjae.model;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Reservation {

	    @Id
	    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="perchase_seq")
		@SequenceGenerator(name="perchase_seq", sequenceName="perchase_seq", allocationSize=1)
	    private Long id;

	    @ManyToOne
	    private PenpickUser penpickUser;

	    @ManyToOne
	    private Pensions pensions;
	    
	    private int userNum;
		private String roomType;
		private int people;
		private String payment;
		private int pay;
		private Date payDate;
		private String resDate;
		private String pick;
		private String pickTime;
		private String market;
	    private int quantity;
	    
	    

	}