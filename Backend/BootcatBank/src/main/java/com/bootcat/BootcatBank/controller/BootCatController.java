package com.bootcat.BootCat.controller;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bootcat.BootCat.models.Customers;
import com.bootcat.BootCat.models.TransactionHistory;
import com.bootcat.BootCat.models.TransactionModel;
import com.bootcat.BootCat.repo.MongoRepo;
import com.bootcat.BootCat.repo.TransactionRepo;

@CrossOrigin
@RestController
public class BootCatController {
	
	public static int key=0;
	
	@Autowired
	private Customers customer;
	
	@Autowired
	private MongoRepo mongorepo;
	
	@Autowired
	private TransactionRepo tranRepo;
	

	@GetMapping("/getall")
	public ArrayList<Customers> getAllCustomers(){
		ArrayList <Customers> userlist = new ArrayList<>();
		mongorepo.findAll().forEach(userlist::add);
        return userlist;
	}
	
	@GetMapping("/get/{id}")
	public Customers getCustomer(@PathVariable Integer id) {
		return mongorepo.findById(id).get();
	}
	

	@PostMapping("/post")
	public String addCustomer(@RequestBody Customers customer) {
		mongorepo.save(customer);
		return "Added";
	}
	
	@PostMapping("/update")
	public String updateCustomer(@RequestBody Customers customer) {
		
		Customers newCustomer = new Customers(customer.getId(), customer.getName(), customer.getEmail(), customer.getMobile(), customer.getBalance());
		mongorepo.save(newCustomer);
		return "Update";
	}
	
	@Autowired
	private TransactionModel transaction;
	
	@Autowired
	private TransactionHistory newTrans;

	@PutMapping("/transaction")
	public String updateBalance(@RequestBody TransactionModel transaction ) {
		int id = transaction.getId();
		 int amount = transaction.getBalance();
		 Customers update = mongorepo.findById(id).get();
		 amount = amount + mongorepo.findById(id).get().getBalance();
		 update.setBalance(amount);
		 mongorepo.save(update);
		 
		 newTrans.setId(++key);
		 newTrans.setAccount_holder(mongorepo.findById(id).get().getName());
		 newTrans.setAccount_number(mongorepo.findById(id).get().getId());
		 newTrans.setAmount(transaction.getBalance());
		 
		 
		 tranRepo.save(newTrans);
		 
		return "Sent";
	}
	
	@GetMapping("/transaction")
	public ArrayList<TransactionHistory> showTransactions(){
		
		ArrayList <TransactionHistory> history = new ArrayList<>();
		tranRepo.findAll().forEach(history::add);
		return history;
		
	}
	
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable Integer id) {
		mongorepo.deleteById(id);
		return "Deleted";
	}
}
