package com.skilldistillery.todo.data;

import java.util.List;

import com.skilldistillery.todo.entities.User;

public interface UserDAO {


	List<User> findAll();
	
	User findById(int id);
	
	User create(User User);
	
	User update(int UserId, User User);
	
	boolean deleteById(Integer UserId);
	
	
}
