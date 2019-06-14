package com.litbo.hospitalzj.supplier.service;
/**
 * 设备采购方式业务层接口
 * @author 刘洋
 *
 */

import com.litbo.hospitalzj.supplier.entity.EqCgfs;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface EqCgService {

	EqCgfs getById(Integer eqcgId);

	List<EqCgfs> getAll();
	//删除，修改状态
	void delete(@Param("eqcgId") Integer eqcgId, @Param("isDelete") Integer isDelete);

	void insert(EqCgfs eqCgfs);

	EqCgfs update(EqCgfs eqCgfs);
	//模糊查询
	List<EqCgfs> findByEqcgNameLike(@Param("eqcgName") String eqcgName);
}
