package com.empulse.assignment.controller;

import com.empulse.assignment.model.Customer;
import com.empulse.assignment.model.Order;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Slf4j
public class ApplicationController {

    @GetMapping("/lmao")
    public void test(){
        Customer customer = new Customer();
        customer.setName("roby");
        customer.setEmail("roby@gmx.de");

        log.info("test123");
        log.info(customer.getName());
    }
}