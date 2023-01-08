package com.example.model;

import javax.persistence.*;

@Entity
public class Repo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer repoId;
    private String repoCode;
    private String repoAmount;
    private String repoDateIn;
    private String repoDateStart;
    private String repoDateEnd;
    private boolean isDelete;
    @ManyToOne
    @JoinColumn(name= "product_id",referencedColumnName = "productId")
    private Product product;

    public Repo() {
    }

    public Integer getRepoId() {
        return repoId;
    }

    public void setRepoId(Integer repoId) {
        this.repoId = repoId;
    }

    public String getRepoCode() {
        return repoCode;
    }

    public void setRepoCode(String repoCode) {
        this.repoCode = repoCode;
    }

    public String getRepoAmount() {
        return repoAmount;
    }

    public void setRepoAmount(String repoAmount) {
        this.repoAmount = repoAmount;
    }

    public String getRepoDateIn() {
        return repoDateIn;
    }

    public void setRepoDateIn(String repoDateIn) {
        this.repoDateIn = repoDateIn;
    }

    public String getRepoDateStart() {
        return repoDateStart;
    }

    public void setRepoDateStart(String repoDateStart) {
        this.repoDateStart = repoDateStart;
    }

    public String getRepoDateEnd() {
        return repoDateEnd;
    }

    public void setRepoDateEnd(String repoDateEnd) {
        this.repoDateEnd = repoDateEnd;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
