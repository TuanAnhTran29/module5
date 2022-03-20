import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoComponent} from "./todo.component";
import {TodoCreateComponent} from "./todo-create/todo-create.component";
import {TodoEditComponent} from "./todo-edit/todo-edit.component";
import {TodoDeleteComponent} from "./todo-delete/todo-delete.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodoComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoDeleteComponent
  ],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
