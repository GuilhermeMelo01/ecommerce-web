package io.github.guilhermemelo01.ecommerceweb.dto;

import lombok.Data;
import lombok.NonNull;

@Data
public class PurchaseResponse {

    //Use this class to send back a Java object as JSON
    @NonNull
    private String orderTrackingNumber;
}
