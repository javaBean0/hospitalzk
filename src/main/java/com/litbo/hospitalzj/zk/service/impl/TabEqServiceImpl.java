package com.litbo.hospitalzj.zk.service.impl;

import com.litbo.hospitalzj.zk.domian.TabEq;
import com.litbo.hospitalzj.zk.mapper.TabEqMapper;
import com.litbo.hospitalzj.zk.service.TabEqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TabEqServiceImpl implements TabEqService {

	@Autowired
	TabEqMapper tabEqMapper;


	@Override
	public TabEq findTable(Integer eqId,Integer jcyqId) {
		return tabEqMapper.findTable(eqId,jcyqId);
	}

	@Override
	public void insert(TabEq tabEq) {
		tabEqMapper.insert(tabEq);
	}

	@Override
	public List<TabEq> findAll() {
		return tabEqMapper.findAll();
	}
}
