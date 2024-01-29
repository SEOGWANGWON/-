package com.penpick.seodongjae.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.seodongjae.model.Pensions;


public interface PensionsService {

	 List<Pensions> getAllPensions();
	 Pensions getPensionsById(Long id); 
	}