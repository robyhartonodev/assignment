package com.empulse.assignment.service;

import com.empulse.assignment.model.Order;

import java.util.List;

public interface OrderService {
    List<Order> findAll();
    Order findById(Long id);
    Order save(Order Order);
    void deleteById(Long id);
}
