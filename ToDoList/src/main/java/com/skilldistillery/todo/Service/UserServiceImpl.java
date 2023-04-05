package com.skilldistillery.todo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.todo.Repository.UserRepository;
import com.skilldistillery.todo.entities.ToDo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public Optional<ToDo> queryById(int userId) {
		if (userRepo.existsById(userId)) {
			return userRepo.findById(userId);
		}
		return null;
	}

	@Override
	public List<ToDo> findByNameLikeTitleOrTitleLike(String keyword) {
		keyword = "%" + keyword + "%";
		return userRepo.findByNameLikeOrTitleLike(keyword, keyword);
	}

	@Override
	public ToDo createNewUser(ToDo toDo) {
		return userRepo.saveAndFlush(toDo);
	}

	@Override
	public boolean deleteUser(int userId) {
		boolean deleted = false;
		Optional<ToDo> toDelete = userRepo.findById(userId);
		if (toDelete.isPresent()) {
			userRepo.delete(toDelete.get());
			deleted = true;
		}
		return deleted;
	}

	@Override
	public ToDo updateUser(int userId, ToDo toDo) {
		Optional<ToDo> originalOpt = userRepo.findById(userId);
		if (originalOpt.isPresent()) {
			ToDo original = originalOpt.get();

			original.setName(toDo.getName());
			original.setTitle(toDo.getTitle());
			original.setTask(toDo.getTask());

			return userRepo.saveAndFlush(original);
		} return null;
	}

}
