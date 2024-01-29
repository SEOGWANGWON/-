package com.penpick.seodongjae.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.seodongjae.model.PenpickUser;
import com.penpick.seodongjae.model.Pensions;
import com.penpick.seodongjae.model.Reservation;
import com.penpick.seodongjae.repository.ReservationRepository;


@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private PenpickUserService penpickUserService;

    @Autowired
    private PensionsService pensionsService;

    @Autowired
    private ReservationRepository reservationRepository;
    

    @Override
    public void makeReservation(String nickname,Long id,int quantity) {
    	PenpickUser penpickUser = penpickUserService.getUserByNickname(nickname);
        Pensions pensions = pensionsService.getPensionsById(id);
       

        Reservation reservation = new Reservation();
        reservation.setPenpickUser(penpickUser);
        reservation.setPensions(pensions);
        reservation.setQuantity(quantity);

        reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getUserReservations(String nickname) {
        PenpickUser penpickUser = penpickUserService.getUserByNickname(nickname);
        return reservationRepository.findByPenpickUser(penpickUser);
    }
    
    public List<Reservation> getAllReservation(){
    	return reservationRepository.findAll();
    }

	
}