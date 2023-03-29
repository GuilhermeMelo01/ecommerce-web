package io.github.guilhermemelo01.ecommerceweb.service;

import io.github.guilhermemelo01.ecommerceweb.dao.CustomerRepository;
import io.github.guilhermemelo01.ecommerceweb.dto.Purchase;
import io.github.guilhermemelo01.ecommerceweb.dto.PurchaseResponse;
import io.github.guilhermemelo01.ecommerceweb.entinty.Customer;
import io.github.guilhermemelo01.ecommerceweb.entinty.Order;
import io.github.guilhermemelo01.ecommerceweb.entinty.OrderItem;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse placeOrder(Purchase purchase) {

        //Retrieve the order info from dto
        Order order = purchase.getOrder();

        //generate tracking number
        String orderTrackingNumber = generateOrderTrackingNumber();
        order.setOrderTrackingNumber(orderTrackingNumber);

        //populate order with orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(order::add);

        //populate order with billingAddress and shippingAddress
        order.setShippingAddress(purchase.getShippingAddress());
        order.setBillingAddress(purchase.getBillingAddress());

        //populate customer with order
        Customer customer = purchase.getCustomer();
        customer.add(order);

        //save to the database
        customerRepository.save(customer);

        //return response
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateOrderTrackingNumber() {
        //Generate a random UUID number (UUID version-4)
        return UUID.randomUUID().toString();
    }
}
