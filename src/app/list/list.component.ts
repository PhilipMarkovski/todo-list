import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { testtodolist } from 'src/testtodolist';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';
import { FormComponent } from '../form/form.component';
import { TodoService } from '../shared/todo.service';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mypipe' })
export class Mypipe implements PipeTransform {
constructor(public todoService: TodoService){}

  transform(deadlineDay:Date): string {
    let date = new Date();
    date.setHours(12,0,0,0);
    const differenceTime = deadlineDay.getTime()-date.getTime()
    const result = Math.round(differenceTime / (1000 * 60 * 60 * 24)); 
  
    if (result == 0){
      return 'Last Day';
    }
    if (result==1){
      return result +' '+ 'Day left'
    }
    if(result !=1){
      return result +' '+ 'Days left'
    }
  }}

  @Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit, AfterViewInit {

  @ViewChild('inputField', { static: false }) inputField: ElementRef;

  testtodolist: testtodolist[] = []

  time: string;

  percent: number;

  constructor(public dialog: MatDialog, public todoService: TodoService, private datePipe: DatePipe) {
  }

  ngOnInit() {

    this.time = this.datePipe.transform(new Date());
  }

  ngAfterViewInit() {
    fromEvent<any>(this.inputField.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(searchString => this.todoService.search(searchString));
  }

  getTime() {
    return this.time;
  }

  opendetail() {
    this.dialog.open(DetailComponent, {
      height: '400px',
      width: '600px',

    })
  }
  addToDoList() {
    this.dialog.open(FormComponent, {
      height: '400px',
      width: '600px',
      disableClose: true,
    })
  }

  changeStatusTodoListElement(element: testtodolist) {
    element.isDone = !element.isDone;
  }
  deleteToDoList(element: testtodolist) {
    const index: number = this.testtodolist.indexOf(element);
    if (index !== -1) {
      this.testtodolist.splice(index, 1);
    }
  }
  delete(element: testtodolist) {
  }

  public search() {
  }

}

