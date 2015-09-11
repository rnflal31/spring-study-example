package com.samhyun.study.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by samhyun on 15. 9. 3.
 */
@Controller
public class HelloController {
    @RequestMapping("/hello")
    public String index(Model model) {
        model.addAttribute("name", "SpringBlog from Millky");
        return "hello";
    }
}
