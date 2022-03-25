import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent, Mypipe } from './list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailComponent } from './detail/detail.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormComponent } from './form/form.component';
import { TodoService } from './shared/todo.service';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DatePipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    FormComponent,
    Mypipe,
    HighlightDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule, 
    MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [TodoService,DatePipe, HighlightDirective],
  bootstrap: [AppComponent],
  entryComponents: [
    DetailComponent,
    FormComponent
  ]
})
export class AppModule { }
