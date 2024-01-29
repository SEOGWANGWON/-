package com.penpick.seodongjae.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.seodongjae.model.PenpickUser;
import com.penpick.seodongjae.model.Reservation;


public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByPenpickUser(PenpickUser penpickUser);
}