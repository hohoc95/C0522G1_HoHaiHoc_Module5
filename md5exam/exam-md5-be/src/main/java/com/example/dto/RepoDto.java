package com.example.dto;

import com.example.model.Product;

public class RepoDto {
    private Integer repoId;
    private String repoCode;
    private String repoAmount;
    private String repoDateIn;
    private String repoDateStart;
    private String repoDateEnd;
    private Product product;

    public RepoDto() {
    }

    public Integer getRepoId() {
        return repoId;
    }

    public String getRepoCode() {
        return repoCode;
    }

    public String getRepoAmount() {
        return repoAmount;
    }

    public String getRepoDateIn() {
        return repoDateIn;
    }

    public String getRepoDateStart() {
        return repoDateStart;
    }

    public String getRepoDateEnd() {
        return repoDateEnd;
    }

    public Product getProduct() {
        return product;
    }
}
