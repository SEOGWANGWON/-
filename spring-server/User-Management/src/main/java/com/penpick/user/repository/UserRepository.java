package com.penpick.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.user.model.Users;

public interface UserRepository extends JpaRepository <Users, Long>{
	
	//추가적으로 필요한 메서드만 작성
	
	//로그인 위해 이메일, 비밀번호로 사용자 찾기
	Users findByEmailAndPassword(String email, String password);
}