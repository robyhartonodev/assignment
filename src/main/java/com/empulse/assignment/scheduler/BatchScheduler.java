package com.empulse.assignment.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class BatchScheduler {
    private JobLauncher jobLauncher;

    @Autowired
    public BatchScheduler(JobLauncher jobLauncher) {
        this.jobLauncher = jobLauncher;
    }


    @Scheduled(fixedRate = 1000000)
    public void scheduleOrderProcess() {
        log.info("job call here");
    }
}
