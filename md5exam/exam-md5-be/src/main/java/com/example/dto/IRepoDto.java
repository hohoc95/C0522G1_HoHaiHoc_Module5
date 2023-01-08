package com.example.dto;

import com.example.model.Product;

public interface IRepoDto {
    Integer getId();
    String getCode();
    String getAmount();
    String getDateIn();
    String getDateStart();
    String getDateEnd();
    String getProduct();
}
