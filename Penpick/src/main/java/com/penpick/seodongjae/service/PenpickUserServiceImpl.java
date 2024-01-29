package com.penpick.seodongjae.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.seodongjae.model.PenpickUser;
import com.penpick.seodongjae.repository.PenpickUserRepository;

@Service
public class PenpickUserServiceImpl implements PenpickUserService{

	@Autowired
	private PenpickUserRepository penpickUserRepository;
	
	
	@Override
	public PenpickUser getUserByNickname(String nickname) {
		return penpickUserRepository.findByNickname(nickname);
	}

	@Override
	public PenpickUser getUserById(Long id) {
		return penpickUserRepository.findByid(id);
	}
}