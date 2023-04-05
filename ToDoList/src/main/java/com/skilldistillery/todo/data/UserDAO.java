package com.skilldistillery.todo.data;

import java.util.List;

import com.skilldistillery.todo.entities.ToDo;

public interface UserDAO {


	List<ToDo> findAll();
	
	ToDo findById(int id);
	
	ToDo create(ToDo ToDo);
	
	ToDo update(int UserId, ToDo ToDo);
	
	boolean deleteById(Integer UserId);
	
	
}
