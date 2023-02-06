package com.empulse.assignment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ApplicationController {

    // Redirect non-api and static files to the index.html and let Nextjs router handles the routing
    @RequestMapping(value = {
            "/{path:^(?!api|public|h2-console)[^\\.]*}",
            "/**/{path:^(?!api|public).*}/{path:[^\\.]*}"}
    )
    public String spa() {
        return "forward:/index.html";
    }
}
