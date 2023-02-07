package com.empulse.assignment.service;

import com.empulse.assignment.model.Order;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    List<Order> findAll();
    Optional<Order> findById(Long id);
    Order save(Order Order);
    void deleteById(Long id);
}
