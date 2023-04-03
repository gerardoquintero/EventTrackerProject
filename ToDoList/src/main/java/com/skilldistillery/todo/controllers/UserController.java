package com.skilldistillery.todo.controllers;

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
import com.skilldistillery.todo.entities.User;

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
	public Optional<User> getUser(@PathVariable Integer userId) {
		Optional<User> user = userService.queryById(userId);
		return user;
	}

	@PostMapping("user")
	public User addUser(@RequestBody User user) {
		return user = userService.createNewUser(user);
	}

	@DeleteMapping("users/{userId}")
	public void removeUser(@PathVariable Integer userId) {
		userService.deleteUser(userId);
	}

	@PutMapping("users/{userID}")
	public User updateUser(@PathVariable Integer userId, @RequestBody User user) {
	return userService.updateUser(userId, user);
	
	
	}

}