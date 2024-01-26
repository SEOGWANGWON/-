package com.penpick.gaeul.pension.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.gaeul.pension.model.PensionImg;
import com.penpick.gaeul.pension.model.Pensions;
import com.penpick.gaeul.pension.repository.PensionImgRepository;
import com.penpick.gaeul.pension.repository.PensionRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class PensionService {
	
	@Autowired 
	private PensionRepository pensionRepository;
	private PensionImgRepository pensionImgRepository;
	
	//펜션 이름 조회
	public List<Pensions> PensionNameList(String name){
		List<Pensions> pension = pensionRepository.findByName(name);
		if(pension == null) {
			throw new EntityNotFoundException("데이터가 엄서용~~"+name);
		}
		return pension;
	}
	
	//펜션 지역 조회
	public List<Pensions> PensionAddressList(String address){
		List<Pensions> pension = pensionRepository.findByAddressContaining(address);
		if(pension == null) {
			throw new EntityNotFoundException("데이터가 엄서용~~"+address);
		}
		return pensionRepository.findByAddressContaining(address);
	}
	
	//펜션 통합 검색
	public List<Pensions> PensionList(String term){
		return pensionRepository.findByNameOrAddressContaining(term);
	}
	
	//펜션 통합 검색
	public List<Pensions> PensionFilterList(String term,String filter){
		return pensionRepository.findByNameContaining(term,filter);
	}
	
	//펜션 전부가져오기
	public List<Pensions> getAllPensionList(){
		return pensionRepository.findAll();
	}
	
	//펜션 이미지 가져오기
	public List<PensionImg> getAllPensionImgList(){
		return pensionImgRepository.findAll();
	}

	
}