package com.penpick.gaeul.pension.model;

import java.sql.Blob;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class PensionImg {

	@Id
	private String image_name;
	private Blob image_data;
	private String name;
}