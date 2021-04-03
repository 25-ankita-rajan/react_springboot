package com.springrest.springrest.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Employee {
	
	@Id
	@Column (name = "id")
	private long id;
	private String code;
	private String name;
	private String isActive;

	public Employee(long id, String code, String name, String isActive) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.isActive = isActive;
	}

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIsActive() {
		return isActive;
	}

	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", code=" + code + ", name=" + name + ", isActive=" + isActive + "]";
	}

	

}
