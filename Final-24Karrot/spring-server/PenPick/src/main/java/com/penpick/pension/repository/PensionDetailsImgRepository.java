package com.penpick.pension.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.penpick.pension.model.PensionImg;

@Repository
public interface PensionDetailsImgRepository extends JpaRepository<PensionImg, String>{

	@Query("select p from PensionImg p where p.name like %:name% ")
	List<PensionImg> findByImageNameList(@Param("name") String name);
	
}
