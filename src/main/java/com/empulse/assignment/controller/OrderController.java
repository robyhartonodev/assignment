package com.empulse.assignment.controller;

import com.empulse.assignment.model.Order;
import com.empulse.assignment.service.OrderServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    private OrderServiceImpl orderServiceImpl;

    @Autowired
    public OrderController(OrderServiceImpl orderServiceImpl) {
        this.orderServiceImpl = orderServiceImpl;
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
    public Order create(@Valid @RequestBody Order resource) {
        return orderServiceImpl.save(resource);
    }

    @PutMapping(value = "/{id}")
    public Order update(@PathVariable("id") Long id, @Valid @RequestBody Order resource) throws Exception {
        Order order = orderServiceImpl.findById(id).orElseThrow(()->new Exception("Order Not Found"));

        order.setSubject(resource.getSubject());
        order.setImages(resource.getImages());
        order.setCustomer(resource.getCustomer());

        return orderServiceImpl.save(order);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") Long id) {
        orderServiceImpl.deleteById(id);
    }
}
