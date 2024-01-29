package com.penpick.seodongjae.model;

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
public class Pensions {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE,
	generator="pension_seq")
	@SequenceGenerator(name="pension_seq",
	sequenceName="pension_seq",
	allocationSize=1)
	private Long id;
	private String name;
	private String contact;
	private String address;
	private double latitude;
	private double longitude;
	private String introduction;
	private String scale;
	private String parking;
	private String cook;
	private String checkIn;
	private String checkOut;
	private String dininghall;
	private String amenities;
	private String seminar;
	private String sports;
	private String sauna;
	private String beauty;
	private String karaoke;
	private String barbeque;
	private String campfire;
	private String pc_room;
	private String publicShower;
	private String refund;
	private int doubleRoom;
	private int tripleRoom;
	private int familyRoom;
	private int groupRoom;
}
