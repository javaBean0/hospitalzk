package com.litbo.hospitalzj.zk.service;

import com.litbo.hospitalzj.zk.domian.TabEq;

import java.util.List;

public interface TabEqService {

	TabEq findTable(Integer eqId, Integer jcyqId);

	void insert(TabEq tabEq);

	List<TabEq> findAll();
}
