package com.litbo.hospitalzj.supplier.service;
/**
 * 设备来源业务层接口
 * @author 刘洋
 *
 */

import com.litbo.hospitalzj.supplier.entity.EqLy;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface EqLyService {

	EqLy getById(Integer eqlyId);

	List<EqLy> getAll();

	void delete(@Param("eqlyId") Integer eqlyId, @Param("isDelete") Integer isDelete);

	void insert(EqLy eqLy);
	EqLy update(EqLy eqLy);
	List<EqLy> findEqLyLike(@Param("eqlyName") String eqlyName);
}
