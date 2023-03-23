package io.github.guilhermemelo01.ecommerceweb.controller;


import io.github.guilhermemelo01.ecommerceweb.dto.Purchase;
import io.github.guilhermemelo01.ecommerceweb.dto.PurchaseResponse;
import io.github.guilhermemelo01.ecommerceweb.service.CheckoutServiceImpl;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutServiceImpl checkoutService;

    public CheckoutController(CheckoutServiceImpl checkoutService){
        this.checkoutService = checkoutService;
    }
    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase){
        return checkoutService.placeOrder(purchase);
    }
}
