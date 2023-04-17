import { Todo } from './../models/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/users';
  constructor(
    private http: HttpClient
  ) { }

  public index(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving pokemon: ' + err)
        );
      })
    );
  }

  public show(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${todoId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.show(): error retrieving Todo: ' + err)
        );
      })
    );
  }

  public create(todo:Todo): Observable<Todo>{
    // todo.completed = false;
    todo.task='';
    return this.http.post<Todo>(`${this.url}`, todo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving Todos: ' + err)
        );
      })
    );

  }

  public update(todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.index(): error retrieving Todos: ' + err)
        );
      })
    );
}

destroy(todoId: number): Observable<void>{
  return this.http.delete<void>(`${this.url}/${todoId}`).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('TodoService.index(): error retrieving Todos: ' + err)
      );
    })
  );
  }
}
