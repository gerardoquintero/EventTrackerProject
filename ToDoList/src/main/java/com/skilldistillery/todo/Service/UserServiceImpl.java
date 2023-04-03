package com.skilldistillery.todo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.todo.Repository.UserRepository;
import com.skilldistillery.todo.entities.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public Optional<User> queryById(int userId) {
		if (userRepo.existsById(userId)) {
			return userRepo.findById(userId);
		}
		return null;
	}

	@Override
	public List<User> findByNameLikeTitleOrTitleLike(String keyword) {
		keyword = "%" + keyword + "%";
		return userRepo.findByNameLikeTitleOrTitleLike(keyword);
	}

	@Override
	public User createNewUser(User user) {
		return userRepo.saveAndFlush(user);
	}

	@Override
	public boolean deleteUser(int userId) {
		boolean deleted = false;
		Optional<User> toDelete = userRepo.findById(userId);
		userRepo.delete(toDelete);
		return deleted;
	}

	@Override
	public User updateUser(int userId, User user) {
			Optional<User> original = userRepo.findById(userId);
//			original.setName(user.getName());
//			original.setTitle(user.getTitle());
//			original.setTask(user.getTask());
		return userRepo.saveAndFlush(original);
	}

}
