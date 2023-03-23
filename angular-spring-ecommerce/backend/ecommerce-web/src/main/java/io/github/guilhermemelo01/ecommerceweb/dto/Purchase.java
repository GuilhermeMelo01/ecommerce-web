package io.github.guilhermemelo01.ecommerceweb.dto;

import io.github.guilhermemelo01.ecommerceweb.entinty.Address;
import io.github.guilhermemelo01.ecommerceweb.entinty.Customer;
import io.github.guilhermemelo01.ecommerceweb.entinty.Order;
import io.github.guilhermemelo01.ecommerceweb.entinty.OrderItem;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address billingAddress;
    private Address shippingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
