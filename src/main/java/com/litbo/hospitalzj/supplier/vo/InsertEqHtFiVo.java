package com.litbo.hospitalzj.supplier.vo;

import com.litbo.hospitalzj.supplier.entity.HtInfo;

import java.util.List;

public class InsertEqHtFiVo {
	private HtInfo htinfo;
	private List<EqInfoVo> eqInfoVos;//shebdei 
	public HtInfo getHtinfo() {
		return htinfo;
	}
	public void setHtinfo(HtInfo htinfo) {
		this.htinfo = htinfo;
	}
	public List<EqInfoVo> getEqInfoVos() {
		return eqInfoVos;
	}
	public void setEqInfoVos(List<EqInfoVo> eqInfoVos) {
		this.eqInfoVos = eqInfoVos;
	}

	
}
