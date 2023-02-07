package com.empulse.assignment.batch;

import com.empulse.assignment.model.Order;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.item.ItemProcessor;

@Slf4j
public class OrderItemProcessor implements ItemProcessor<Order, Order> {
    @Override
    public Order process(Order order) throws Exception {
        log.info("Processing (" + order + ")");

        return order;
    }
}
