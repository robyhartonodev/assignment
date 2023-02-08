package com.empulse.assignment.config;

import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.context.annotation.Configuration;

@Configuration
//@EnableBatchProcessing
public class BatchConfiguration {
//    @Autowired
//    private JobBuilderFactory jobBuilderFactory;
//    @Autowired
//    private StepBuilderFactory stepBuilderFactory;
//
//    @Bean
//    public Job job(Step step1) {
//        return jobBuilderFactory.get('job')
//                .incrementer(new RunIdIncrementer())
//                .flow(step1)
//                .end()
//                .build();
//    }
//
//    @Bean
//    public Step step1(ItemReader<Order> reader, ItemWriter<Order> writer, ItemProcessor<Order, Order> processor) {
//        return stepBuilderFactory.get("step1")
//                .<Order, Order> chunk(10)
//                .reader(reader)
//                .processor(processor)
//                .writer(writer)
//                .build();
//    }
}
