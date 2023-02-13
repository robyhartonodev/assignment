package com.empulse.assignment.config;

import com.empulse.assignment.tasklet.OrderTasklet;
import org.springframework.batch.core.*;

import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
public class BatchConfiguration {
    @Autowired
    private JobLauncher jobLauncher;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private PlatformTransactionManager platformTransactionManager;

    @Bean
    public Tasklet myTasklet() {
        return new OrderTasklet();
    }

    @Bean
    public Step batchStep(JobRepository jobRepository, Tasklet myTasklet, PlatformTransactionManager platformTransactionManager) {
        return new StepBuilder("myStep", jobRepository)
                .tasklet(myTasklet, platformTransactionManager)
                .build();
    }

    @Bean
    public Job batchOrderJob(JobRepository jobRepository, Step step){
        return new JobBuilder("batchOrderJob", jobRepository)
                .start(step)
                .build();
    }

    // Every n minute run batch job zip order files
     @Scheduled(cron = "0 0/1 * * * *")
    public void scheduleOrderProcess() throws JobInstanceAlreadyCompleteException, JobExecutionAlreadyRunningException, JobParametersInvalidException, JobRestartException {
        Step step = batchStep(jobRepository, myTasklet(), platformTransactionManager);
        Job job = batchOrderJob(jobRepository, step);

        JobParameters jobParameters = new JobParametersBuilder().addString("JobID", String.valueOf(System.currentTimeMillis())).toJobParameters();
        JobExecution execution = jobLauncher.run(job, jobParameters);
    }
}
