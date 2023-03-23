package io.github.guilhermemelo01.ecommerceweb.dao;

import io.github.guilhermemelo01.ecommerceweb.entinty.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
