package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.EmployeeDao;
import com.springrest.springrest.entities.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao employeeDao;
//	List<Employee> list;
	
	public EmployeeServiceImpl() {
		 
//		list=new ArrayList<>();
//		list.add(new Employee(145,"Nivedita","Graphic Designer"));
//		list.add(new Employee(146,"Sandeep","Data Analyst"));
//		list.add(new Employee(147,"Siddharth","Real State"));
		
	}

	@Override
	public List<Employee> getEmployees() {
	
		return employeeDao.findAll();
	}

	@Override
	public Optional<Employee> getEmployee(long employeeId) {
		
//		Employee e = null;
//		for(Employee employee : list) {
//			if(employee.getId()==employeeId) {
//				e = employee;
//				break;
//			}
//		}
		Optional<Employee> entity = employeeDao.findById(employeeId);
		return entity;
	}

	@Override
	public Employee addEmployee(Employee employee) {
//		list.add(employee);
		employeeDao.save(employee);
		return employee;
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		
//		list.forEach(e -> {
//			if(e.getId() == employee.getId()) {
//				e.setName(employee.getName());
//				e.setDesignation(employee.getDesignation());
//			}
//		});
		employeeDao.save(employee);
		return employee;
	}

	@Override
	public void deleteEmployee(long parseLong) {
		
		// list = this.list.stream().filter(e -> e.getId() != parseLong).collect(Collectors.toList());
		Employee entity = employeeDao.getOne(parseLong);
		employeeDao.delete(entity);
	}

}
