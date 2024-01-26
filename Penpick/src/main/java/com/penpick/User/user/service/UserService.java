package com.penpick.User.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.penpick.User.user.model.Users;
import com.penpick.User.user.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserService {

	//멤버(필드) 변수
	private UserRepository userRepository;
	
	//전체 회원 정보 조회 (테스트용... 없어도 됨)
	public List<Users> getAllUsers(){
		return userRepository.findAll();
	}
	
	//로그인 (사용자 정보 조회)
	public Users findByEmailAndPassword(Users params) {
		Users user = userRepository.findByEmailAndPassword(params.getEmail(), params.getPassword());
		return user;
	}
	
	//회원가입
	public Users saveUser(Users user) {
		return userRepository.save(user);
	}
	
	//사용자 조회 by id
	public Users getUserById(Long user_id) {
		return userRepository.findById(user_id).orElse(null);
	}
	
	//회원탈퇴 (id로...)
	public void deleteUserById(Long user_id) {
		userRepository.deleteById(user_id);
	}
	
}
