package com.penpick.reservation.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.pension.service.PensionService;
import com.penpick.reservation.model.Reservation;
import com.penpick.reservation.repository.ReservationRepository;
import com.penpick.users.model.Users;
import com.penpick.users.service.UserService;


@Service
public class ReservationService{

    @Autowired
    private UserService userService;

    @Autowired
    private PensionService pensionService;

    @Autowired
    private ReservationRepository reservationRepository; 
    
    
  //24시간 이후 데이터 가져오기
    public List<Reservation> findReservationsAfter24HoursByPenpickUserId(Long id) {
        LocalDate twentyFourHoursLater = LocalDate.now().plusDays(2); // plusDays에 1을 주면 오늘 날자만 제외되므로 다음날까지 제외하려면 2를 주어야함
        return reservationRepository.findReservationsByPenpickUserIdAndCheckOutDayGreaterThanEqual(id, twentyFourHoursLater);
    }

    public void makeReservation(String email,String phoneNumber,int people,boolean pick,String payment,int pay,/*Date checkInday,Date checkOutDay,*/String roomType)  {
//    	Pensions pensions = pensionService.getPensionName(name);
    	Users users = userService.getUserByEmail(email);
       

        Reservation reservation = new Reservation();
        reservation.setPenpickUser(users);
//        reservation.setPensions(pensions);
        reservation.setPhoneNumber(phoneNumber);
        reservation.setPeople(people);
        reservation.setPick(pick);
        reservation.setPayment(payment);
        reservation.setPay(pay);
//        reservation.setCheckInDay(checkInday);
//        reservation.setCheckOutDay(checkOutDay);
        reservation.setRoomType(roomType);

        reservationRepository.save(reservation);
    }

    
    public List<Reservation> getAllReservation(){
    	return reservationRepository.findAll();
    }
    
    public Optional<Reservation> getReservation(Long id){
    	return reservationRepository.findById(id);
    }
//    
//    public Optional<Reservation> deleteReservation() {
//    	return reservationRepository.deleteById();
//    }
    
    //예약 정보 전화번호로 불러오기
    public List<Reservation> findReservationsByPhoneNumber(String phoneNumber) {
      return reservationRepository.findReservationsByPhoneNumber(phoneNumber);
    }
    
    //예약 수정을 위한 저장 메서드
    public Reservation updateReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
    
  
    
    public Optional<Reservation> findByIdReservation(Long reviewId) {
    	return reservationRepository.findById(reviewId);
    }
    
    
}