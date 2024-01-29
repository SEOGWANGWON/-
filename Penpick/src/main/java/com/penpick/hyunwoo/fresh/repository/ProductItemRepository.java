package com.penpick.hyunwoo.fresh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.hyunwoo.fresh.model.ProductItem;

public interface ProductItemRepository extends JpaRepository<ProductItem, Long>{

}
