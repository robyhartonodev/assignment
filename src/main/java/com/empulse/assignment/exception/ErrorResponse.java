package com.empulse.assignment.exception;

import lombok.Data;

import java.util.List;

@Data
public class ErrorResponse {
    private int status;
    private List<String> messages;
}
