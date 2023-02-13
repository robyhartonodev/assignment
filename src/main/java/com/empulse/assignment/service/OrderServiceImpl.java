package com.empulse.assignment.service;

import com.empulse.assignment.model.Customer;
import com.empulse.assignment.model.Order;
import com.empulse.assignment.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    private OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> findAllByCustomer(Customer customer) {
        return orderRepository.findAllByCustomer(customer);
    }

    public List<Order> findAllByStatusAndOrderDate(Integer status, Date orderDate) {
        return orderRepository.findAllByStatusAndOrderDate(status, orderDate);
    };

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public Optional<Order> findById(Long id) {
        return orderRepository.findById(id);
    }

    @Override
    public Order save(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public void deleteById(Long id) {
        orderRepository.deleteById(id);
    }
}
