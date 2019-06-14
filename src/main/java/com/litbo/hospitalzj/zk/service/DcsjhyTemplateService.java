package com.litbo.hospitalzj.zk.service;

import com.litbo.hospitalzj.zk.domian.DcsjhyTemplate;

import java.util.List;

public interface DcsjhyTemplateService {

	public void insert(DcsjhyTemplate dt);
	
	public List<DcsjhyTemplate> findAll();
	
	public void delete(String id);
	
}
