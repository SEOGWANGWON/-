package com.penpick.seodongjae.service;

import java.util.List;

import com.penpick.seodongjae.model.Reservation;

public interface ReservationService {
	
	List<Reservation> getUserReservations(String nickname);
	
	void makeReservation(String nickname, Long id, int quantity);
	
	List<Reservation> getAllReservation();
    
}