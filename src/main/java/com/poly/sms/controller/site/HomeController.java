package com.poly.sms.controller.site;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("sms/home")
    public String home() {
        return "site/index";
    }

    @RequestMapping("/")
    public String app() {
        return "app/index";
    }

    @RequestMapping("/login")
    public String aaa() {
        return "app/login";
    }

}
