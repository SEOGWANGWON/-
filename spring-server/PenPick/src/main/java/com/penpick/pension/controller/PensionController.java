	package com.penpick.pension.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.pension.model.PensionImg;
import com.penpick.pension.model.Pensions;
import com.penpick.pension.service.PensionService;


@RequestMapping("/penpick")
@RestController
public class PensionController {

	@Autowired
	private PensionService pensionService;
	
//	펜션 이름 검색
	@GetMapping("/searchPension")
	public List<Pensions>  PensionNameList(@RequestParam String name) {
		return pensionService.PensionNameList(name);
	}

//	펜션 통합검색
	@GetMapping("/searchAll")
    public List<Pensions> searchUsers(
            @RequestParam(required = false) String term,@RequestParam(required = false) String filter)  {
		System.out.println(term);
		System.out.println(filter);
        if (filter == null) {
            return pensionService.PensionList(term);
        } else if(term != null&&filter !=null ){
        	return pensionService.PensionFilterList(term, "있음");
        } else {
             throw new IllegalArgumentException("요청하는 파라미터 값을 찾을 수 없습니다.");
        }
    }
	
	//모든 펜션 조회
	@GetMapping("/pensionList")
	public List<Pensions> getAllPensionList(){
		return pensionService.getAllPensionList();
	}
	
	@GetMapping("/pensionImgList")
	public List<PensionImg> getAllPensionImgList(){
		return pensionService.getAllPensionImgList();
	}
	
	// 펜션 상세 페이지 이동(서광원)
		@GetMapping("/details")
		public Pensions DetailsPension(@RequestParam Long id) {
			Pensions pension = pensionService.getPensionById(id);
			return pension;
		}
		
		
	//====================================동재님 것============================================
		@GetMapping("/list")
		public ResponseEntity<List<Pensions>> getAllPensions(){
			List<Pensions> pensionsList = null;
			try {
				pensionsList = pensionService.getAllPensions();
			} catch (Exception e) {
				e.printStackTrace();
			}
			return ResponseEntity.ok(pensionsList);
		}
	
	
	
}