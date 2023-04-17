import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
gettodocount() {
throw new Error('Method not implemented.');
}

Todo: Todo[] =[];
selected: Todo | null = null;
newTodo = new Todo();
editTodo: Todo | null = null;
title: any;
showComplete: any;
  constructor(
    private todoService: TodoService
  ){}
  ngOnInit(): void {
this.reload();
  }
  displayTodo(todo: Todo) {
    this.selected = todo;
  }
  displayTable(): void {
    this.selected = null;
  }

  addTodo(todo: Todo) {
    this.todoService.create(todo).subscribe({
      next: (createdTodo) => {
        this.newTodo = new Todo();
        this.reload();
      },
      error: (fail) => {
        console.error('Error creating todo');
        console.log(fail);
      },
    });

    //this.todos =this.todoService.index();
  }

  setEditTodo() {
    this.editTodo = Object.assign({}, this.selected);
  }

  updateTodo(editTodo: Todo, goToDetail = true) {
    console.log(editTodo);
    this.todoService.update(editTodo).subscribe({
      next: (updateTodo) => {
        this.editTodo = null;
        if (goToDetail) {
          this.selected = updateTodo;
        }
        this.reload();
      },
      error: (notGood) => {
        console.error('Error updating Todo');
        console.log(notGood);
      },
    });
  }

  //this.todos =this.todoService.index();

  deleteTodo(todoId: number) {
    this.todoService.destroy(todoId).subscribe({
      next: () => {
        this.reload();
      },
      error: (didNotWork) => {
        console.log('Error handiling delete');
        console.error(didNotWork);
      },
    });
    //this.todos =this.todoService.index();
  }

  reload() {
    this.todoService.index().subscribe({
      next: (todosList) => {
        this.Todo = todosList;
      },
      error: (problem) => {
        console.error(
          'ProductListHttpComponent.loadProducts(): error loading products:'
        );
        console.error(problem);
      },
    });
  }
}
