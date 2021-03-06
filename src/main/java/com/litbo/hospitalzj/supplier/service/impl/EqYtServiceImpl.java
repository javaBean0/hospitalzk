package com.litbo.hospitalzj.supplier.service.impl;
/**
 * 设备用途业务层
 * @author 刘洋
 *
 */

import com.litbo.hospitalzj.supplier.entity.EqYt;
import com.litbo.hospitalzj.supplier.mapper.EqYtMapper;
import com.litbo.hospitalzj.supplier.service.EqYtService;
import com.litbo.hospitalzj.supplier.service.exception.DeleteException;
import com.litbo.hospitalzj.supplier.service.exception.InsertException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EqYtServiceImpl implements EqYtService{
	@Autowired
	private EqYtMapper eqYtMapper;

	@Override
	public EqYt getById(Integer eqytId) {
		return findById(eqytId);
	}
	private EqYt findById(Integer eqytId) {
		return eqYtMapper.findById(eqytId);
	}
	@Override
	public List<EqYt> getAll() {
		return eqYtMapper.findAll();
	}

	@Override
	public void delete(Integer eqytId,Integer isDelete) {
		EqYt data=findById(eqytId);
		if(data==null){
			throw new DeleteException("设备用途方式不已存在");
		}
		eqYtMapper.delete(eqytId,isDelete);
	}

	@Override
	public void insert(EqYt eqYt) {
		EqYt data=eqYtMapper.findByName(eqYt.getEqytName());
		if(data!=null){
			throw new InsertException("设备用途方式或名称已存在");
		}
		eqYtMapper.insert(eqYt);
	}

	@Override
	public EqYt update(EqYt eqYt) {
		eqYtMapper.update(eqYt);
		return eqYt;
	}

	@Override
	public List<EqYt> findEqYtLike(String eqytName) {
		return eqYtMapper.findEqYtLike(eqytName);
	}
}
