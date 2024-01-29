package com.penpick.seodongjae.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.seodongjae.model.PenpickUser;

public interface PenpickUserRepository extends JpaRepository<PenpickUser,Long>{
	
	
	PenpickUser findByNickname(String nickname);
	PenpickUser findByid(Long id);
}
