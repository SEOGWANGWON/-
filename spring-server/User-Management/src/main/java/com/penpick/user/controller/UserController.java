package com.penpick.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.user.model.Users;
import com.penpick.user.service.UserService;

@RestController
@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping
	public List<Users> getAllUsers(Model model) {
		return userService.getAllUsers();
	}
	
	//회원가입
	@PostMapping("/add")
	public ResponseEntity<Users> addUser(@RequestBody Users user){
		Users saveUser = userService.saveUser(user);
		return ResponseEntity.ok(saveUser);
	}
	
	//로그인
	@PostMapping("/login")
	public Users login(@RequestBody final Users params) {
		Users user = userService.findByEmailAndPassword(params);
		return user;
	}
	
	//회원정보 수정
	@PutMapping("/update/{id}")
	public ResponseEntity<Users> updateUser(@PathVariable Long id,
									@RequestBody Users updatedUser){
		Users existUser = userService.getUserById(id);
		existUser.setEmail(updatedUser.getEmail());
		existUser.setPassword(updatedUser.getPassword());
		
		Users updateUser = userService.saveUser(existUser);
		return ResponseEntity.ok(updateUser);
	}
	
	//회원탈퇴
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id){
		userService.deleteUserById(id);
		return ResponseEntity.ok("user 삭제 성공");
	}
}
