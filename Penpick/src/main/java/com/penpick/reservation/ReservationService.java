package com.penpick.reservation;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
@Service
public class ReservationService {
	
	@Autowired
	private ReservationRepository reservationRepository;

	public List<Reservation> getAllReservation() {
		return reservationRepository.findAll();
	}
	
	public Optional<Reservation> getReservation(Long id) {
		return reservationRepository.findById(id);
	}
	
	public void saveReservation(Reservation reservation) {
		reservationRepository.save(reservation);
	}
	
	public void deleteReservation(Reservation reservation) {
		reservationRepository.delete(reservation);
	}
	
	public void deleteAllReservation() {
		reservationRepository.deleteAll();
	}
}
