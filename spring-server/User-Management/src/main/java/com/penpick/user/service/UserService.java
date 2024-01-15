package com.penpick.user.service;

import org.springframework.stereotype.Service;

import com.penpick.user.model.Users;
import com.penpick.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserService {

	//final 붙여야 생성자 만들어짐
	private final UserRepository userRepository;
	
	public Users findBy(Users params) {
		Users user = userRepository.findByEmailAndPasswd(params.getEmail(), params.getPasswd());
		return user;
	}
}
