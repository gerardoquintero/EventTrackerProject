package com.skilldistillery.todo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.todo.entities.ToDo;

public interface UserRepository extends JpaRepository<ToDo, Integer> {
	ToDo queryById(int userId);
	List<ToDo> findByNameLikeOrTitleLike(String keyWord, String keyword2);
}
