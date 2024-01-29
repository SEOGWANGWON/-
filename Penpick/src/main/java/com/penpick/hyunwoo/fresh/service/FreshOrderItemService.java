package com.penpick.hyunwoo.fresh.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.hyunwoo.fresh.model.FreshOrderItem;
import com.penpick.hyunwoo.fresh.repository.FreshOrderItemRepository;
@Service
public class FreshOrderItemService {
	
	@Autowired
	private FreshOrderItemRepository freshorderitemRepository;
	
	public List<FreshOrderItem> getAllFreshOrderItem() {
		return freshorderitemRepository.findAll();
	}
	
	public Optional<FreshOrderItem> getOrderItems(Long res_num) {
		return freshorderitemRepository.findById(res_num);
	}
	
	public FreshOrderItem registerFreshOrderItem(FreshOrderItem freshorderitem) {
		return freshorderitemRepository.save(freshorderitem);
	}
	
	public void deleteFreshOrderItem(FreshOrderItem freshorderitem) {
		freshorderitemRepository.delete(freshorderitem);
	}
	
	public void deleteAllFreshOrderItem(FreshOrderItem freshorderitem) {
		freshorderitemRepository.deleteAll();
	}
	
}
