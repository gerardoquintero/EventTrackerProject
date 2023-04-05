package com.skilldistillery.todo.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="to_do")
public class ToDo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String title;
	
	private String task;
	
	public ToDo() {
		
	}

	public ToDo(int id, String name, String title, String task) {
		super();
		this.id = id;
		this.name = name;
		this.title = title;
		this.task = task;
	}



	public ToDo(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ToDo other = (ToDo) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "ToDo [id=" + id + ", name=" + name + ", title=" + title + ", task=" + task + "]";
	}


	
	
	
	
}
