package com.empulse.assignment.tasklet;

import com.empulse.assignment.model.Order;
import com.empulse.assignment.model.OrderFile;
import com.empulse.assignment.service.OrderFileServiceImpl;
import com.empulse.assignment.service.OrderServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Slf4j
public class OrderTasklet implements Tasklet {
    @Autowired
    private OrderFileServiceImpl orderFileServiceImpl;

    @Autowired
    private OrderServiceImpl orderServiceImpl;

    @Override
    public RepeatStatus execute(StepContribution stepContribution, ChunkContext chunkContext) throws IOException {
        log.info("OrderTasklet Starting...");

        // Get all orders with status 0: PROCESSING and with the due order date of now
        Date currentDate = new Date();
        List<Order> unprocessedOrders = orderServiceImpl.findAllByStatusAndOrderDate(0, currentDate);

        // Loop all unprocessed orders
        for (Order order : unprocessedOrders) {
            List<OrderFile> orderFiles = order.getOrderFiles();

            String zipFileName = "src/main/resources/files/" + "orderId-" + order.getId().toString() + "-final.zip";

            // Generate zip data, based on order file data
            // If success then set status to 1 (success)
            // Create new order file record for the corresponding order
            try (FileOutputStream fos = new FileOutputStream(zipFileName);
                 ZipOutputStream zos = new ZipOutputStream(fos);) {
                // Loop through the order files of the orders and generate the zip data
                for (OrderFile orderFile : orderFiles) {
                    File file = new File(orderFile.getPath());
                    ZipEntry zipEntry = new ZipEntry(file.getName());
                    zos.putNextEntry(zipEntry);
                    Files.copy(file.toPath(), zos);
                }

                // Create a record order file for the zip file
                OrderFile zipOrderFile = new OrderFile();
                zipOrderFile.setOrder(order);
                zipOrderFile.setName("orderId-" + order.getId().toString() + "-final.zip");
                zipOrderFile.setPath(zipFileName);
                orderFileServiceImpl.save(zipOrderFile);

                // Change status to success
                order.setStatus(1);
                orderServiceImpl.save(order);
            }
        }
        log.info("OrderTasklet Done...");

        return RepeatStatus.FINISHED;
    }
}
