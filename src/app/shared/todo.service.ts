import { Injectable } from '@angular/core';
import { testtodolist } from 'src/testtodolist';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  viewList: testtodolist[] = []

  toDoList: testtodolist[] = []

  index = 0;

  constructor() { }

  public addToDo(todo: any) {
    this.toDoList.push(todo);
    this.viewList.push(todo);
    this.index++;
    console.log(this.index)
  }

  public deleteToDo(todo: any) {
    this.index--;
    const index: number = this.toDoList.indexOf(todo);
    if (index !== -1) {
      this.toDoList.splice(index, 1);
    }

    const viewIndex: number = this.viewList.indexOf(todo);
    if (viewIndex !== -1) {
      this.viewList.splice(viewIndex, 1);
    }

  }
  public changeStatusTodoListElement(todo: any) {
    todo.isDone = !todo.isDone;
  }

  public search(input: string) {
    if (input === '') {
      this.viewList = this.toDoList.slice(0);
    } else {
      this.viewList = this.toDoList.filter(obj => obj.name.includes(input));
    }
  }
}
