package com.penpick.users.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.penpick.reservation.model.Reservation;
import com.penpick.users.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
	
	public Optional<Users> findById(Long id);

    
	
	public Optional<Users> findByUserEmail(String userEmail);
}