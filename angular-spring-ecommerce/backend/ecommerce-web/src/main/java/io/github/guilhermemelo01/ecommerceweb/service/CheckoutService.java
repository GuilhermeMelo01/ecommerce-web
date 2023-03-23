package io.github.guilhermemelo01.ecommerceweb.service;

import io.github.guilhermemelo01.ecommerceweb.dto.Purchase;
import io.github.guilhermemelo01.ecommerceweb.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
