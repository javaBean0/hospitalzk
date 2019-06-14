package com.litbo.hospitalzj.supplier.service;

import com.litbo.hospitalzj.supplier.vo.EqHtFjVo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface EqHtFjVoService {
	
	/*int insert(InsertEqHtFiVo insertEqHtFiVo);*/
	
	List<EqHtFjVo> findEqHtFjVo(@Param("htYzm") String htYzm);

}
