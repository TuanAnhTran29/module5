import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../todo.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {

  todoForm: any;
  id: any;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
  }

  getCategory(id: number) {
    return this.todoService.findById(id).subscribe(todo => {
      this.todoForm = new FormGroup({
        content: new FormControl(todo.content),
        complete: new FormControl(todo.complete)
      });
    });
  }

  deleteTodo(id: any){
    this.todoService.deleteTodo(id).subscribe(() => {
      this.router.navigate(['/todo/list']);
    }, e => {
      console.log(e);
    });
  }

}
