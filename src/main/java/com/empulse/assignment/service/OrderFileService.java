package com.empulse.assignment.service;

import com.empulse.assignment.model.OrderFile;

import java.util.List;
import java.util.Optional;

public interface OrderFileService {
    List<OrderFile> findAll();
    Optional<OrderFile> findById(Long id);
    OrderFile save(OrderFile orderFile);
    void deleteById(Long id);
}
