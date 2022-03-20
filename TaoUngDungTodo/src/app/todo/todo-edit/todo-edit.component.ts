import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todoForm: any
  id: any

  constructor(private todoService: TodoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id= Number(paramMap.get('id'))
      this.getTodo(this.id)
    })

  }

  ngOnInit(): void {
  }

  getTodo(id: any){
    return this.todoService.findById(id).subscribe(todo => {
      this.todoForm= new FormGroup({
        content: new FormControl(todo.content),
        complete: new FormControl(todo.complete)
      })
    })
  }

  updateTodo(id: any){
    const todoForm= this.todoForm.value
    this.todoService.updateTodo(id,todoForm).subscribe(()=> {
      this.todoForm.reset()
      alert("Sửa thành công")
    }, error => {
      console.log(error)
    })
  }

}
