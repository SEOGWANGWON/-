package com.penpick.reservation.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.penpick.pension.service.PensionService;
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
	
	
	//24시간 이후의 데이터 불러오기
			@GetMapping("/reservationIds")
			public List<Reservation> getReservationsAfter24HoursByPenpickUserId(@RequestParam("id") Long id) {
			    return reservationService.findReservationsAfter24HoursByPenpickUserId(id);
			}
	
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
	

	 
	 @GetMapping("/check")
	 public List<Reservation> getReservation(@RequestParam String phoneNumber){
		 List<Reservation> reservationList = reservationService.findReservationsByPhoneNumber(phoneNumber);
		 return reservationList;
	 }
	 
	 @GetMapping("/reservationDetail")
	 public void reservationDetail(@RequestParam Long id) {
		 Optional<Reservation> reservation = reservationService.getReservation(id);
	 }

	 
     //아이디값으로 조회
	 @GetMapping("/checkId")
	 public Optional<Reservation> getReservation(Long id){
		 return reservationService.getReservation(id);
	 }
	 
	 //예약 삭제
	 @PostMapping("/delete")
	 public void deleteReservation(Long id) {
		  reservationService.deleteReservation(id);
	 }
	 
	 //예약 수정
	 @PutMapping("/update")
	 public ResponseEntity<Reservation> updateReservation(@PathVariable Long id,@RequestBody Reservation updatedReservation){
		 Optional<Reservation> existingReservation = reservationService.getReservation(id);
		 
		 if(existingReservation != null) {
			 Reservation reservation = existingReservation.get();
			 
			 reservation.setPeople(updatedReservation.getPeople());
			 reservation.setRoomType(updatedReservation.getRoomType());
			 reservation.setPickTime(updatedReservation.getPickTime());
			
			 Reservation updatedRes = reservationService.updateReservation(reservation);
			 return ResponseEntity.ok(updatedRes);
		 }else {
			 return ResponseEntity.notFound().build();
		 }
		
	 }
	 
	 
	 
	 
	 
	 @PostMapping("/makeReservation")
	 public ResponseEntity<String> makeReservation(@RequestBody Map<String, Object> request) throws ParseException  {
		 
		 SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		 
		 String email = (String) request.get("email");
	     String phoneNumber = (String) request.get("phoneNumber");
	     String pick = (String) request.get("pick");
	     String peopleString = (String) request.get("people");
	     String payment = (String) request.get("payment");
	     String payString = (String) request.get("pay");
	     String checkInDayDate = (String) request.get("checkInDay");
	     String checkOutDayDate = (String) request.get("checkOutDay");
	     String roomType = (String) request.get("roomType");
	   
	     try {
	         int people = Integer.parseInt(peopleString);
//	         boolean pick = Boolean.parseBoolean(pickBoolean);
	         int pay = Integer.parseInt(payString);
	         Date checkInDay = (Date)dateFormat.parse(checkInDayDate);
	         Date checkOutDay = (Date)dateFormat.parse(checkOutDayDate);
	         
	         reservationService.makeReservation(email,phoneNumber, people,pick,payment,pay,checkInDay,checkOutDay,roomType);
	         return ResponseEntity.ok("구매에 성공하였습니다.");
	     } catch (NumberFormatException e) {
	         return ResponseEntity.badRequest().body("구매실패했습니다.");
	     }
	 }

}