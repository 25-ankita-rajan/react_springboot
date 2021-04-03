package com.springrest.springrest.services;

import java.util.List;
import java.util.Optional;

import com.springrest.springrest.entities.Employee;

public interface EmployeeService {
	
	public List<Employee> getEmployees();

	public Optional<Employee> getEmployee(long employeeId);

	public Employee addEmployee(Employee employee);

	public Employee updateEmployee(Employee employee);

	public void deleteEmployee(long parseLong);

}
