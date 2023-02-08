package com.empulse.assignment.repository;

import com.empulse.assignment.model.Customer;
import com.empulse.assignment.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByCustomer(Customer customer);
}
