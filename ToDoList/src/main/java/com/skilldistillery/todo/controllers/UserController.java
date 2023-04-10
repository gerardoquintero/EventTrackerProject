package com.skilldistillery.todo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.todo.Service.UserService;
import com.skilldistillery.todo.entities.ToDo;

@RestController
@RequestMapping("api")
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("ping")
	public String ping() {
		return "pong";
	}

	@GetMapping("users/{userId}")
	public Optional<ToDo> getUser(@PathVariable Integer userId) {
		Optional<ToDo> toDo = userService.queryById(userId);
		return toDo;
	}
	
	@GetMapping("users")
	public List<ToDo> getUsers() {
		List<ToDo> toDo = userService.listAll();
		return toDo;
	}

	@PostMapping("users")
	public ToDo addUser(@RequestBody ToDo toDo) {
		return toDo = userService.createNewUser(toDo);
	}

	@DeleteMapping("users/{userId}")
	public void removeUser(@PathVariable Integer userId) {
		userService.deleteUser(userId);
	}

	@PutMapping("users/{userID}")
	public ToDo updateUser(@PathVariable Integer userId, @RequestBody ToDo toDo) {
	return userService.updateUser(userId, toDo);
	
	
	}

}