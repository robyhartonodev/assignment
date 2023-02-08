package com.empulse.assignment.controller;

import com.empulse.assignment.model.Customer;
import com.empulse.assignment.model.Order;
import com.empulse.assignment.service.CustomerServiceImpl;
import com.empulse.assignment.service.OrderServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    private OrderServiceImpl orderServiceImpl;
    private CustomerServiceImpl customerServiceImpl;

    @Autowired
    public OrderController(OrderServiceImpl orderServiceImpl, CustomerServiceImpl customerServiceImpl) {
        this.orderServiceImpl = orderServiceImpl;
        this.customerServiceImpl = customerServiceImpl;
    }

    @GetMapping
    public List<Order> index() {
        return orderServiceImpl.findAll();
    }

    @GetMapping(value = "/{id}")
    public Order show(@PathVariable("id") Long id) throws Exception {
        return orderServiceImpl.findById(id).orElseThrow(() -> new Exception("Order Not Found"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Order create(
            @RequestParam MultipartFile[] multipartFiles,
            @RequestParam Integer customerId,
            @RequestParam String subject,
            @RequestParam @DateTimeFormat(pattern = "dd-MM-yyyy") Date orderDate,
            @RequestParam @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm:ss") Date orderDateTime,
            @RequestParam Integer status
            ) throws Exception {
        Long longCustomerId = Long.valueOf(customerId);
        Customer customer = customerServiceImpl.findById(longCustomerId).orElseThrow(() -> new Exception("Customer Not Found"));

        Order resource = new Order();
        resource.setSubject(subject);
        resource.setOrderDate(orderDate);
        resource.setOrderDateTime(orderDateTime);
        resource.setStatus(status);
        resource.setCustomer(customer);

        return orderServiceImpl.save(resource);
    }

    @PutMapping(value = "/{id}")
    public Order update(@PathVariable("id") Long id, @Valid @RequestBody Order resource) throws Exception {
        Order order = orderServiceImpl.findById(id).orElseThrow(() -> new Exception("Order Not Found"));

        order.setSubject(resource.getSubject());

        return orderServiceImpl.save(order);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        orderServiceImpl.deleteById(id);
    }
}
