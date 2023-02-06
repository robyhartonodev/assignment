package com.empulse.assignment.repository;

import com.empulse.assignment.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
