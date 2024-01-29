package com.penpick.seodongjae.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.seodongjae.model.Reservation;
import com.penpick.seodongjae.service.ReservationService;


@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins="http://localhost:3000", 
allowCredentials="true",
allowedHeaders="*")
public class ReservationController {
	
	@Autowired
	private ReservationService reservationService;
	
	 @GetMapping("/penpickUser/{nickname}")
	 public ResponseEntity<List<Reservation>> getUserreservations(@PathVariable String nickname) {
	     List<Reservation> reservations = reservationService.getUserReservations(nickname);
	     return ResponseEntity.ok(reservations);
	 }


	 @PostMapping("/penpickUser")
	 public ResponseEntity<List<Reservation>> getUserreservations(@RequestBody Map<String, String> requestBody) {
	     String nickname = requestBody.get("nickname");
	     List<Reservation> reservations = reservationService.getUserReservations(nickname);
	     return ResponseEntity.ok(reservations);
	 }
	
	 @GetMapping("/list")
		public ResponseEntity<List<Reservation>> getAllreservation() {
			List<Reservation> reservationList = null;
			try {
				reservationList = reservationService.getAllReservation();
			} catch (Exception e) {
				e.printStackTrace();
			}
			return ResponseEntity.ok(reservationList);
	 }
	 
	 
	 
	 
	 @PostMapping("/makeReservation")
	 public ResponseEntity<String> makeReservation(@RequestBody Map<String, Object> request) {
	     String nickname = (String) request.get("nickname");
	     String pensionsIdString = (String) request.get("pensionsId");
	     String quantityString = (String) request.get("quantity");

	     try {
	         Long pensionsId = Long.parseLong(pensionsIdString);
	         Integer quantity = Integer.parseInt(quantityString);

	         reservationService.makeReservation(nickname, pensionsId, quantity);
	         return ResponseEntity.ok("구매에 성공하였습니다.");
	     } catch (NumberFormatException e) {
	         return ResponseEntity.badRequest().body("구매실패했습니다.");
	     }
	 }

}
