package com.penpick.reservation.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.reservation.model.Reservation;
import com.penpick.reservation.service.ReservationService;


@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins="http://localhost:3000", 
allowCredentials="true",
allowedHeaders="*")
public class ReservationController {
	
	@Autowired
	private ReservationService reservationService;
	
	@Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;	
    }
	
	//24시간 이후의 데이터 불러오기
	@GetMapping("/reservationIds")
	public List<Reservation> getReservationsAfter24HoursByPenpickUserId(@RequestParam("id") Long id) {
	    return reservationService.findReservationsAfter24HoursByPenpickUserId(id);
	}
	
	//유저와 맞는 예약 불러오기
//	@GetMapping("/reservationIds")
//	public List<Reservation> getReservationsByPenpickUserId(@RequestParam("Id") Long id) {
//	    return reservationService.findReservationsByPenpickUserId(id);
//	}
	
	
//	 @GetMapping("/penpickUser/{email}")
//	 public ResponseEntity<List<Reservation>> getUserReservations(@PathVariable String email) {
//	     List<Reservation> reservations = reservationService.getUserReservations(email);
//	     return ResponseEntity.ok(reservations);
//	 }


//	 @PostMapping("/penpickUser")
//	 public ResponseEntity<List<Reservation>> getUserReservations(@RequestBody Map<String, String> requestBody) {
//	     String email = requestBody.get("email");
//	     List<Reservation> reservations = reservationService.getUserReservations(email);
//	     return ResponseEntity.ok(reservations);
//	 }
	
	 @GetMapping("/list")
		public ResponseEntity<List<Reservation>> getAllReservation() {
			List<Reservation> reservationList = null;
			try {
				reservationList = reservationService.getAllReservation();
			} catch (Exception e) {
				e.printStackTrace();
			}
			return ResponseEntity.ok(reservationList);
	 }
	
	 //이메일로 조회
	 @GetMapping("/checkAll")
	 public List<Reservation> getReservations(String email){
		 return reservationService.getReservations(email);
	 }
	 
//	 유저넘으로 조회
//	 @GetMapping("/checkAll")
//	 public List<Reservation> getReservation(int userNum){
//		 return reservationService.getReservation(userNum);
//	 }
	 
     //아이디값으로 조회
	 @GetMapping("/check")
	 public Optional<Reservation> getReservation(Long id){
		 return reservationService.getReservation(id);
	 }
	 
	 
	 
	 
	 @PostMapping("/makeReservation")
	 public ResponseEntity<String> makeReservation(@RequestBody Map<String, Object> request) {
	     String email = (String) request.get("email");
	     String phoneNumber = (String) request.get("phoneNumber");
//	     String pickBoolean = (String) request.get("pick");
	     String peopleString = (String) request.get("people");
//	     String payment = (String) request.get("payment");
	   
	     try {
	    	 
	    	 
	         int people = Integer.parseInt(peopleString);
//	         boolean pick = Boolean.parseBoolean(pickBoolean);
	         
	         reservationService.makeReservation(email,phoneNumber, people/*,pick*//*,payment*/);
	         return ResponseEntity.ok("구매에 성공하였습니다.");
	     } catch (NumberFormatException e) {
	         return ResponseEntity.badRequest().body("구매실패했습니다.");
	     }
	 }

}
