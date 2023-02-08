package com.empulse.assignment.controller;

import com.empulse.assignment.model.Customer;
import com.empulse.assignment.model.Order;
import com.empulse.assignment.model.OrderFile;
import com.empulse.assignment.service.CustomerServiceImpl;
import com.empulse.assignment.service.OrderFileServiceImpl;
import com.empulse.assignment.service.OrderServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    private OrderServiceImpl orderServiceImpl;
    private OrderFileServiceImpl orderFileServiceImpl;
    private CustomerServiceImpl customerServiceImpl;

    @Autowired
    public OrderController(OrderServiceImpl orderServiceImpl, OrderFileServiceImpl orderFileServiceImpl, CustomerServiceImpl customerServiceImpl) {
        this.orderServiceImpl = orderServiceImpl;
        this.orderFileServiceImpl = orderFileServiceImpl;
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
    public ResponseEntity<Order> create(
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

        Order savedOrder = orderServiceImpl.save(resource);

        // Saving files in the static folder and save the file path and name in the db
        try {
            for (MultipartFile file : multipartFiles) {
                byte[] bytes = file.getBytes();
                String fileName = "orderId-" + savedOrder.getId().toString() + "-" + file.getOriginalFilename() ;
                Path path = Paths.get("src/main/resources/static/images/" + fileName);
                Files.write(path, bytes);

                // Save Order Files
                OrderFile orderFile = new OrderFile();
                orderFile.setName(fileName);
                orderFile.setPath(path.toString());
                orderFile.setOrder(savedOrder);

                orderFileServiceImpl.save(orderFile);
            }

            // Refresh order object
            Order updatedOrder = orderServiceImpl.findById(savedOrder.getId()).orElse(null);

            return ResponseEntity.ok().body(updatedOrder);
        } catch (IOException e) {
            return ResponseEntity.badRequest().body(savedOrder);
        }
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
