package com.empulse.assignment.batch;

import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    @Autowired
    public JobCompletionNotificationListener() {
    }

    @Override
    public void beforeJob(JobExecution execution) {

    }

    @Override
    public void afterJob(JobExecution execution) {
        if(execution.getStatus() == BatchStatus.COMPLETED) {
            log.info("Job completed!");
        }
    }
}
