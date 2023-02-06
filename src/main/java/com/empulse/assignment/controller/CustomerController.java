package com.empulse.assignment.controller;

import com.empulse.assignment.model.Customer;
import com.empulse.assignment.service.CustomerServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {
    private CustomerServiceImpl customerServiceImpl;

    @Autowired
    public CustomerController(CustomerServiceImpl customerServiceImpl) {
        this.customerServiceImpl = customerServiceImpl;
    }

    @GetMapping
    public List<Customer> index() {
        return customerServiceImpl.findAll();
    }

    @GetMapping(value = "/{id}")
    public Customer show(@PathVariable("id") Long id) throws Exception {
        return customerServiceImpl.findById(id).orElseThrow(() -> new Exception("Customer Not Found"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Customer create(@RequestBody Customer resource) {
        return customerServiceImpl.save(resource);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Customer updated(@PathVariable("id") Long id, @RequestBody Customer resource) throws Exception {
        Customer customer = customerServiceImpl.findById(id).orElseThrow(() -> new Exception("Customer Not Found"));

        customer.setEmail(resource.getEmail());
        customer.setName(resource.getName());

        return customerServiceImpl.save(customer);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        customerServiceImpl.deleteById(id);
    }
}
