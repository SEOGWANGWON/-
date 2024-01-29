package com.penpick.say.users.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.penpick.say.users.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

	
	public Optional<Users> findByUserEmail(String userEmail);
	
}