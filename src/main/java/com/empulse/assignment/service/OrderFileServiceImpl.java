package com.empulse.assignment.service;

import com.empulse.assignment.model.Order;
import com.empulse.assignment.model.OrderFile;
import com.empulse.assignment.repository.OrderFileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderFileServiceImpl implements OrderFileService {
    private OrderFileRepository orderFileRepository;

    @Autowired
    public OrderFileServiceImpl(OrderFileRepository orderFileRepository){
        this.orderFileRepository = orderFileRepository;
    }

    public List<OrderFile> findAllByOrder(Order order) {
        return orderFileRepository.findAllByOrder(order);
    }

    @Override
    public List<OrderFile> findAll() {
        return orderFileRepository.findAll();
    }

    @Override
    public Optional<OrderFile> findById(Long id) {
        return orderFileRepository.findById(id);
    }

    @Override
    public OrderFile save(OrderFile orderFile) {
        return orderFileRepository.save(orderFile);
    }

    @Override
    public void deleteById(Long id) {
        orderFileRepository.deleteById(id);
    }
}
