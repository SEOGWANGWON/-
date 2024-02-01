package com.penpick.pension.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.penpick.pension.model.PensionImg;

public interface PensionImgRepository extends JpaRepository <PensionImg,String>{
	
	@Query("select p from PensionImg p where p.imageName like %:name%")
	List<PensionImg> findByImageNameContaining(@Param("name") String name);

}