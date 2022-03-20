import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./todo";
const API_URL= `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(protected http: HttpClient) { }

  getAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(API_URL + '/todos')
  }

  saveTodo(todo: Todo): Observable<Todo>{
    return this.http.post(API_URL + '/todo', todo)
  }

  findById(id: any): Observable<Todo>{
    return this.http.get<Todo>(`${API_URL}/todo/${id}`)
  }

  updateTodo(id: number, todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(`${API_URL}/todo/${id}`,todo)
  }

  deleteTodo(id: number):Observable<Todo>{
    return this.http.delete<Todo>(`${API_URL}/todo/${id}`)
  }

}
