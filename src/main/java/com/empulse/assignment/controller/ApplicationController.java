package com.empulse.assignment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ApplicationController {

    @RequestMapping(value = {"/{path:^(?!api|public)[^\\.]*}", "/**/{path:^(?!api|public).*}/{path:[^\\.]*}"})
    public String spa() {
        return "forward:/index.html";
    }
}
