package io.github.guilhermemelo01.ecommerceweb.dao;

import io.github.guilhermemelo01.ecommerceweb.entinty.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
}
