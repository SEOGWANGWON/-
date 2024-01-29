package com.penpick.hyunwoo.fresh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.hyunwoo.fresh.model.FreshOrderItem;

public interface FreshOrderItemRepository extends JpaRepository<FreshOrderItem, Long>{

}
