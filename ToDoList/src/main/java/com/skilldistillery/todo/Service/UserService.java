package com.skilldistillery.todo.Service;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.todo.entities.User;

public interface UserService {

	Optional<User> queryById(int userId);
	List<User> findByNameLikeTitleOrTitleLike(String keyWord);
	boolean deleteUser(int userId);
	User createNewUser(User user);
	User updateUser(int userId, User user);
}
