package com.springrest.springrest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Employee;
import com.springrest.springrest.services.EmployeeService;

@RestController
@CrossOrigin
public class MyController {
	
	@Autowired
	private EmployeeService employeeService;
	
	
	// get all employees
	@GetMapping("/employees")
	public List<Employee> getEmployees()
	{
		return this.employeeService.getEmployees();
	}
	
	// get one employee
	@GetMapping("/employees/{employeeId}")
	public Optional<Employee> getEmployee(@PathVariable String employeeId)
	{
		return this.employeeService.getEmployee(Long.parseLong(employeeId));
	}
	
	// add one employee
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee)
	{
		return this.employeeService.addEmployee(employee);
		 
	}
	
	// update
	@PutMapping("/employees")
	public Employee updateEmployee(@RequestBody Employee employee) {
		return this.employeeService.updateEmployee(employee);
	}
	
	// delete
	@DeleteMapping("/employees/{employeeId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String employeeId){
		try {
			this.employeeService.deleteEmployee(Long.parseLong(employeeId));
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
