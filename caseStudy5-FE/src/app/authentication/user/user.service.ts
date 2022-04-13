import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {TokenService} from "../../tokenService/token.service";
const API_URL= `${environment.apiUrl4}`

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id: any): Observable<User>{
    return this.http.get<User>(`${API_URL}/${id}`);
  }

  updateUserById( user: User, id: any): Observable<User>{
    return this.http.put<User>(`${API_URL}/edit/${id}`,user)
  }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(API_URL + '/' + 'allUser')
  }

  deleteUser(id: any): Observable<any>{
    return this.http.delete(`${API_URL}/delete/${id}`)
  }

}
