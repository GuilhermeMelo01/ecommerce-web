package io.github.guilhermemelo01.ecommerceweb.dto;

import lombok.Data;

@Data
public class PurchaseResponse {
    //Use this class to send back a Java object as JSON

    private String orderTrackingNumber;
}
