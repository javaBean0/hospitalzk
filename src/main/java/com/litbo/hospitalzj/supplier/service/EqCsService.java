package com.litbo.hospitalzj.supplier.service;

import com.litbo.hospitalzj.supplier.entity.EqCs;
import com.litbo.hospitalzj.supplier.service.exception.PasswordNotMatchException;
import com.litbo.hospitalzj.supplier.service.exception.UserNotFoundException;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface EqCsService {
	
	EqCs Reg(EqCs eqcs);
	
	void delete(@Param("sbcsId") Integer sbcsId);
	
	List<EqCs> findAll();
	
	EqCs findOne(@Param("sbcsId") Integer sbcsId);
	
	EqCs login(@Param("sbcsName") String sbcsName, @Param("sbcsCreditcode") String sbcsCreditcode) throws UserNotFoundException, PasswordNotMatchException;
	
	void updataInfo(EqCs eqcs);

}
