package com.penpick.user.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.user.model.Users;
import com.penpick.user.service.UserService;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;
	
	@PostMapping("/login")
	public Users login(@RequestBody final Users params) {
		Users user = userService.findBy(params);
		return user;
	}
}
