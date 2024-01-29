package com.penpick.hyunwoo.fresh.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.hyunwoo.fresh.model.FreshOrderItem;
import com.penpick.hyunwoo.fresh.service.FreshOrderItemService;

@RestController
@RequestMapping("/freshorder")

public class FreshOrderItemController {
	
	@Autowired
	private FreshOrderItemService freshorderitemService;
	
	@GetMapping
	public String freshOrderItemList() {
		return "redirect:/freshorder/list";
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<FreshOrderItem>> getAllFreshOrderItem() {
		List<FreshOrderItem> freshorderitemList = null;
		try {
			freshorderitemList = freshorderitemService.getAllFreshOrderItem();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(freshorderitemList);
	}
	
	@GetMapping("/{res_num}")
	public ResponseEntity<Optional<FreshOrderItem>> getFershOrderItem(@PathVariable Long res_num){
		Optional<FreshOrderItem> freshorderitem = freshorderitemService.getOrderItems(res_num);
		
		if(freshorderitem.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			return ResponseEntity.ok(freshorderitem);		
		}
	}
	
	@PostMapping("/add")
	public ResponseEntity<FreshOrderItem> registerFershOrderItem(@RequestBody FreshOrderItem freshorderitem) {
		System.out.print("값"+freshorderitem);
		FreshOrderItem saveOrder = freshorderitemService.registerFreshOrderItem(freshorderitem);
		
		return ResponseEntity.ok(saveOrder);
	}
	
	@DeleteMapping("/delete/{item_num}")
	public ResponseEntity<String> deleteFreshCartItem(@PathVariable FreshOrderItem freshorderitem){
		freshorderitemService.deleteFreshOrderItem(freshorderitem);
		return ResponseEntity.ok("삭제되었습니다");
	}

	
	
}

	