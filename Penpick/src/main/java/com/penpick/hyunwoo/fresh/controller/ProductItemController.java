package com.penpick.hyunwoo.fresh.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.hyunwoo.fresh.model.ProductItem;
import com.penpick.hyunwoo.fresh.service.ProductItemService;

import lombok.Data;
@Data
@RestController
@RequestMapping("/productItem")

public class ProductItemController {
	
	@Autowired
	private ProductItemService productitemService;
	
	@GetMapping
	public String ProductItemList() {
		return "redirect:/productitem.list";
	}
	
	@GetMapping("/list")
	public ResponseEntity<List<ProductItem>> getAllProductItem() {
		List<ProductItem> productList = null;
		try {
			productList = productitemService.getAllProducts();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok(productList);
	}
	
	@PostMapping("/add")
	public ResponseEntity<String> createProductItem(@RequestBody Map<String, Object> request){
		String item_name = (String) request.get("item_name");
		String item_price = (String) request.get("item_price");
		
		try {
			Long Item_price = Long.parseLong(item_price);
			
			productitemService.createProductItem(item_name, Item_price);
			return ResponseEntity.ok("물품 추가 성공");
		} catch (NumberFormatException e) {
			return ResponseEntity.badRequest().body("물품 추가 실패");
		}
	}
}