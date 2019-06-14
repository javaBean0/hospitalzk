package com.litbo.hospitalzj.supplier.service;

import com.litbo.hospitalzj.supplier.entity.ZzInfo;

public interface ZzInfoService {
    void insert(ZzInfo zzInfo);
    void update(ZzInfo zzInfo);
    ZzInfo findZzById(Integer suId);
}
