package com.penpick.gaeul.pension.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.penpick.gaeul.pension.model.PensionImg;

public interface PensionImgRepository extends JpaRepository <PensionImg,String>{
	
	@Query("select p from PensionImg p where p.image_name like %:name%")
	List<PensionImg> findByImage_nameContaining(@Param("name") String name);

}