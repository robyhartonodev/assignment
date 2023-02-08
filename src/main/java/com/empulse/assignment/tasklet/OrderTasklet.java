package com.empulse.assignment.tasklet;

import com.empulse.assignment.service.OrderFileServiceImpl;
import com.empulse.assignment.service.OrderServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
public class OrderTasklet implements Tasklet {
    @Autowired
    private OrderFileServiceImpl orderFileServiceImpl;

    @Autowired
    private OrderServiceImpl orderServiceImpl;

    @Override
    public RepeatStatus execute(StepContribution stepContribution, ChunkContext chunkContext) throws Exception {
        log.info("OrderTasklet Starting...");

        // Get all orders with status 0: PROCESSING

        log.info("OrderTasklet Done...");

        return RepeatStatus.FINISHED;
    }
}
