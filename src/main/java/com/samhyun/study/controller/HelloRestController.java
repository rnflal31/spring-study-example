package com.samhyun.study.controller;
import com.samhyun.study.dao.HelloDao;
import com.samhyun.study.domain.Hello;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by samhyun on 15. 9. 3.
 */
@Controller
@RestController
//@EnableAutoConfiguration
public class HelloRestController {

    @Autowired
    private HelloDao helloDao;

    @RequestMapping("/")
    public String index() {
        return "hello world!";
    }

    @RequestMapping("/add")
    public Hello add(Hello hello) {
        Hello helloData = helloDao.save(hello);
        return helloData;
    }

    @RequestMapping("/list")
    public List<Hello> list(Model model) {
        List<Hello> helloList = helloDao.findAll();
        return helloList;
    }

//    @RequestMapping("/hello")
//    public String index(Model model) {
//        model.addAttribute("name", "SpringBlog from Millky");
//        return "hello";
//    }

}
