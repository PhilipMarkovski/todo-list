import { Component, OnInit, Inject, SystemJsNgModuleLoader } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  index = 0;
  nameFormControl: FormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        nameFormControl: [''],
        deadline:[''],
      }
    )
  }



  addItem(input: string, deadline: Date ): void {
    let result = deadline;
    result.setHours(12,0,0,0);
     
    if (input != '') {
      this.todoService.addToDo({ name: input, isDone: false, date: result});
      this.index++;
      
      
    }
  }

  quitList() {
    this.dialogRef.close();
  }



}