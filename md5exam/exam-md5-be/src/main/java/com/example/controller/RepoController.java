package com.example.controller;

import com.example.dto.IRepoDto;
import com.example.model.Product;
import com.example.service.IProductService;
import com.example.service.IRepoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/repo")
@CrossOrigin("*")
public class RepoController {
    @Autowired
    private IRepoService iRepoService;

    @Autowired
    private IProductService iProductService;

    @GetMapping("/list/{nameSearch}&{dateInSearch}&{dateEndSearch}")
    public ResponseEntity<Page<IRepoDto>> getAllRepoPaging(@PageableDefault(value = 5) Pageable pageable,
                                                           @PathVariable("nameSearch") String nameSearch,
                                                           @PathVariable("dateInSearch") String dateInSearch,
                                                           @PathVariable("dateEndSearch") String dateEndSearch){
        Page<IRepoDto> repoDtos = iRepoService.searchRepo(nameSearch, dateInSearch, dateEndSearch, pageable);
        return new ResponseEntity<>(repoDtos, HttpStatus.OK);
    }
    @GetMapping("/product-list")
    public ResponseEntity<List<Product>> getAllProduct() {
        List<Product> product = iProductService.findAll();
        if (product.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
