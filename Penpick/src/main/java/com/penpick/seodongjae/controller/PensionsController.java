package com.penpick.seodongjae.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.seodongjae.model.Pensions;
import com.penpick.seodongjae.service.PensionsService;

@RestController
@RequestMapping("/pensions")
@CrossOrigin(origins="http://localhost:3000",
allowCredentials="true",
allowedHeaders="*")
public class PensionsController {
	private PensionsService pensionsService;
	
	@Autowired
	public PensionsController(PensionsService pensionsService) {
		this.pensionsService = pensionsService;
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<Pensions>> getAllPensions(){
		List<Pensions> pensionsList = null;
		try {
			pensionsList = pensionsService.getAllPensions();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(pensionsList);
	}
}
