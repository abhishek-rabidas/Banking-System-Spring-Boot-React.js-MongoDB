package com.bootcat.BootcatBank.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.bootcat.BootcatBank.model.TransactionHistory;

public interface TransactionRepo extends MongoRepository<TransactionHistory, Integer> {

}