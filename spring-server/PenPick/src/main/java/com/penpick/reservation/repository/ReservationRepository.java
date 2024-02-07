package com.penpick.reservation.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.penpick.reservation.model.Reservation;
import com.penpick.users.model.Users;


public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByPenpickUser(Users penpickUser);
    
	@Query("SELECT r FROM Reservation r JOIN Users p ON r.phoneNumber = p.phoneNumber WHERE p.userEmail = :email")
    List<Reservation> findByEmail(@Param("email") String email);

	
	//24시간 이후의 값만 불러오기
	@Query("SELECT r FROM Reservation r WHERE r.penpickUser.id = :userId AND r.checkInDay >= :twentyFourHoursLater")
	List<Reservation> findReservationsByPenpickUserIdAndCheckInDayGreaterThanEqual(@Param("userId") Long userId, @Param("twentyFourHoursLater") LocalDate twentyFourHoursLater);
	
	//유저와 일치하는 예약 불러오기
//	@Query("SELECT r FROM Reservation r WHERE r.penpickUser.id = :userId")
//	List<Reservation> findReservationsByPenpickUserId(@Param("userId") Long userId);

	
	
	//    List<Reservation> findByEmail(String email);
	
//	void makeReservation(String nickname, Long id, int quantity);
	
	
	
//	List<Reservation> getAllReservation();
}