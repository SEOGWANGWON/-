package com.penpick.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.user.model.Users;

public interface UserRepository extends JpaRepository <Users, Long>{
	//추가적으로 필요한 메서드만 작성
	Users findByEmailAndPasswd(String email, String passwd);
}