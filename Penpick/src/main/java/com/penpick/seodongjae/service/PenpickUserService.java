package com.penpick.seodongjae.service;

import org.springframework.stereotype.Service;

import com.penpick.seodongjae.model.PenpickUser;


public interface PenpickUserService {
	PenpickUser getUserByNickname(String nickname);
	PenpickUser getUserById(Long id);
}
