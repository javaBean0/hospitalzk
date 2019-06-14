package com.litbo.hospitalzj.supplier.service.impl;

import com.litbo.hospitalzj.supplier.entity.ZzInfo;
import com.litbo.hospitalzj.supplier.mapper.ZzInfoMapper;
import com.litbo.hospitalzj.supplier.service.ZzInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ZzInfoServiceImpl implements ZzInfoService {
    @Autowired
    private ZzInfoMapper zzInfoMapper;

    @Override
    public void insert(ZzInfo zzInfo) {
        zzInfoMapper.insert(zzInfo);
    }

    @Override
    public void update(ZzInfo zzInfo) {
        zzInfoMapper.update(zzInfo);
    }

    @Override
    public ZzInfo findZzById(Integer suId) {
        return zzInfoMapper.findZzById(suId);
    }

}
