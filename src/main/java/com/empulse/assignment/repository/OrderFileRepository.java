package com.empulse.assignment.repository;

import com.empulse.assignment.model.Customer;
import com.empulse.assignment.model.Order;
import com.empulse.assignment.model.OrderFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderFileRepository extends JpaRepository<OrderFile, Long> {
    List<OrderFile> findAllByOrder(Order order);
}
