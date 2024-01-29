package com.penpick.hyunwoo.fresh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.hyunwoo.fresh.model.FreshCartItem;

public interface FreshCartItemRepository extends JpaRepository<FreshCartItem, Long>{

}
