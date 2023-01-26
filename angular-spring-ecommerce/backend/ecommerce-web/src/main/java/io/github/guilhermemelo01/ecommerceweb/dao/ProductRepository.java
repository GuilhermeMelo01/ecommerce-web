package io.github.guilhermemelo01.ecommerceweb.dao;

import io.github.guilhermemelo01.ecommerceweb.entinty.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
