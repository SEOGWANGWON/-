package com.penpick.hyunwoo.fresh.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.hyunwoo.fresh.model.FreshCartItem;
import com.penpick.hyunwoo.fresh.repository.FreshCartItemRepository;

@Service
public class FreshCartItemService {
	
	@Autowired
	private FreshCartItemRepository freshcartitemRepository;
	
	public List<FreshCartItem> getAllFreshCartItem() {
		return freshcartitemRepository.findAll();
	}
	
	public Optional<FreshCartItem> getCartItems(Long res_num) {
		return freshcartitemRepository.findById(res_num);
	}
	
	/*
	public FreshCartItem registerFreshCartItem(FreshCartItem freshcartitem) {
		FreshCartItem cart = new FreshCartItem();
		 cart.setItem_count(0);
	}
	*/
	
	public FreshCartItem registerFreshCartItem(FreshCartItem freshcartitem) {
		return freshcartitemRepository.save(freshcartitem);
	}
	
	
	public void deleteFreshCartItem(FreshCartItem freshcartitem) {
		freshcartitemRepository.delete(freshcartitem);
	}
	
	public void deleteAllFreshCartItem(FreshCartItem freshcartitem) {
		freshcartitemRepository.deleteAll();
	}
	
}

