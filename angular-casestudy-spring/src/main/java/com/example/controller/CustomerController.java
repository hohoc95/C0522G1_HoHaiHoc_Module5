package com.example.controller;

import com.example.model.Customer;
import com.example.model.CustomerType;
import com.example.service.ICustomerService;
import com.example.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    private ICustomerService iCustomerService;

    @Autowired
    private ICustomerTypeService iCustomerTypeService;

    @GetMapping("/list")
    public ResponseEntity<List<Customer>> getAllCustomer() {
        return new ResponseEntity<>(iCustomerService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/typelist")
    public ResponseEntity<List<CustomerType>> getAllCustomerType() {
        return new ResponseEntity<>(iCustomerTypeService.findAll(), HttpStatus.OK);
    }
}
