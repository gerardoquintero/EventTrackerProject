import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo';

@Pipe({
  name: 'incomplete'
})
export class IncompletePipe implements PipeTransform {
  transform(todos: Todo[], showComplete: boolean): Todo[] {
    if(showComplete){
      return todos;
    }

      let results: Todo[] = [];
      for(let todo of todos){
        if(!todo.completed){
          results.push(todo);
        }
      }
      return results;
    }
}
