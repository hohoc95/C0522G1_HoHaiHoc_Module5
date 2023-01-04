package com.example.service;

import com.example.model.CustomerType;
import java.util.List;


public interface ICustomerTypeService {
    List<CustomerType> findAll();
}
