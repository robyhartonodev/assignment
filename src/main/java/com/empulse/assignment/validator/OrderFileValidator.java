package com.empulse.assignment.validator;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import org.springframework.web.multipart.MultipartFile;

public class OrderFileValidator implements ConstraintValidator<ValidFile, MultipartFile[]> {

    @Override
    public void initialize(ValidFile constraintAnnotation) {

    }

    @Override
    public boolean isValid(MultipartFile[] multipartFiles, ConstraintValidatorContext context) {

        boolean result = true;

        for (MultipartFile file: multipartFiles) {
            String contentType = file.getContentType();
            if (!isSupportedContentType(contentType)) {
                result = false;
            }
        }

        return result;
    }

    private boolean isSupportedContentType(String contentType) {
        return contentType.equals("image/png")
                || contentType.equals("image/jpg")
                || contentType.equals("image/jpeg");
    }
}
