package com.skilldistillery.todo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.todo.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	User queryById(int userId);
	List<User> findByNameLikeTitleOrTitleLike(String keyWord);
	void delete(Optional<User> toDelete);
	User updateUser(int userId, User user);
	User saveAndFlush(Optional<User> original);
}
