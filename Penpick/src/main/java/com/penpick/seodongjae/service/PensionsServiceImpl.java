package com.penpick.seodongjae.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.seodongjae.model.Pensions;
import com.penpick.seodongjae.repository.PensionsRepository;

@Service
public class PensionsServiceImpl implements PensionsService {

 @Autowired
 private PensionsRepository productRepository;

 @Override
 public List<Pensions> getAllPensions() {
     return productRepository.findAll();
 }

 @Override
 public Pensions getPensionsById(Long id) {
     return productRepository.findById(id)
             .orElseThrow(() -> new RuntimeException("Pensions not found with id: " + id));
 }
}