package com.penpick.review.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.penpick.review.model.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long>{

	// 마이 페이지 에서 나의 모든 리뷰 확인
	List<Review> findByReviewId(Long id);

	//
	@Query("SELECT r FROM Review r WHERE r.pensions.id = :id")
	List<Review> findByPensionsId(@Param("id")Long id);
	
	
}
