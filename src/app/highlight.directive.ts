import { Directive,ElementRef,Input, AfterViewInit } from '@angular/core';
import { TodoService } from 'src/app/shared/todo.service';


@Directive({
  selector: '[color]'
})
export class HighlightDirective implements AfterViewInit {
  

  constructor(private el: ElementRef, public todoService: TodoService, ) { }

  @Input('color') highlightColor: Date;
  ngAfterViewInit(): void {
    this.dateDays(this.highlightColor)
  }
  dateDays(deadlineDay:Date){
    let date = new Date();
    const differenceTime = Math.abs(deadlineDay.getTime() - date.getTime())
    const result = Math.round(differenceTime / (1000 * 60 * 60 * 24)); 
  
    if (result == 0){
      this.el.nativeElement.style.color = '#aFF3333';
    }
    if (result==1){
      this.el.nativeElement.style.color = '#FF9F33'; 
    }
    if(result != 1){
      this.el.nativeElement.style.color = '#51f542'; 
    }

  }

}
