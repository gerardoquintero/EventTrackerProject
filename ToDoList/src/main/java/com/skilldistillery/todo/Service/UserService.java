package com.skilldistillery.todo.Service;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.todo.entities.ToDo;

public interface UserService {

	Optional<ToDo> queryById(int userId);
	List<ToDo> findByNameLikeTitleOrTitleLike(String keyWord);
	boolean deleteUser(int userId);
	ToDo createNewUser(ToDo toDo);
	ToDo updateUser(int userId, ToDo toDo);
	List<ToDo> listAll();
}
 