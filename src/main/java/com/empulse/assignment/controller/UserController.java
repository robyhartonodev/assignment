package com.empulse.assignment.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

@RestController
@Slf4j
@RequestMapping(path = "api/v1/users")
public class UserController {
    @PostMapping("/upload/multiple/files")
    public ResponseEntity<String> uploadData(@RequestParam("multipleFiles") MultipartFile[] files) throws Exception {

        if (files == null || files.length == 0) {
            throw new RuntimeException("You must select at least one file for uploading");
        }

        StringBuilder sb = new StringBuilder(files.length);

        for (int i = 0; i < files.length; i++) {
            InputStream inputStream = files[i].getInputStream();
            String originalName = files[i].getOriginalFilename();
            String name = files[i].getName();
            String contentType = files[i].getContentType();
            long size = files[i].getSize();

            sb.append("File Name: " + originalName + "\n");

            log.info("InputStream: " + inputStream);
            log.info("OriginalName: " + originalName);
            log.info("Name: " + name);
            log.info("ContentType: " + contentType);
            log.info("Size: " + size);
        }

        // Do processing with uploaded file data in Service layer
        return new ResponseEntity<String>(sb.toString(), HttpStatus.OK);
    }
}
