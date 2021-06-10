package com.bootcat.BootcatBank.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.bootcat.BootcatBank.model.Customers;
@CrossOrigin(origins = "http://localhost:3000")
public interface MongoRepo extends MongoRepository<Customers, Integer> {
	
}